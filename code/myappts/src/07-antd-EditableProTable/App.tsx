import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button, Switch } from 'antd';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { HolderOutlined } from '@ant-design/icons';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}

const RowContext = React.createContext<RowContextProps>({});
const DragHandle = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);
  return (
    <Button
      type="text"
      size="small"
      icon={<HolderOutlined />}
      style={{
        cursor: 'move',
      }}
      ref={setActivatorNodeRef}
      {...listeners}
    />
  );
};

const Row = (props: any) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });
  const style = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
        }
      : {}),
  };
  const contextValue = useMemo(
    () => ({
      setActivatorNodeRef,
      listeners,
    }),
    [setActivatorNodeRef, listeners],
  );
  return (
    <RowContext.Provider value={contextValue}>
      <tr {...props} ref={setNodeRef} style={style} {...attributes} />
    </RowContext.Provider>
  );
};

type DataSourceType = {
  id: React.Key;
  codeId?: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  enabled?: boolean;
  children?: DataSourceType[];
};

const App = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prevState) => {
        const tableDataSource = [...prevState]
        const activeIndex = tableDataSource.findIndex((record: any) => record.id === active?.id);
        const overIndex = tableDataSource.findIndex((record: any) => record.id === over?.id);
        return arrayMove(tableDataSource, activeIndex, overIndex);
      });
    }
  };

  useEffect(() => {
    getList()
  }, []);

  const getList = () => {
    setTimeout(() => {
      const list = new Array(10).fill(1).map((_, index) => {
        return {
          id: (Date.now() + index).toString(),
          codeId: (Date.now() + index).toString(),
          title: `活动名称${index}`,
          decs: '这个活动真好玩',
          state: 'open',
          enabled: false,
          created_at: 1590486176000,
        };
      });
      setDataSource(list)
      setEditableRowKeys(getKeys(list))
    }, 2000)
  }

  const isEditable = (_: any, record: any) => {
    if (record.codeId) {
      return false;
    }
    return true;
  };

  const columns: ProColumns<DataSourceType>[] = [
    {
        title: '排序',
        editable: false,
        width: 60,
        render: () => <DragHandle />,
    },
    {
      title: '活动名称',
      dataIndex: 'title',
      width: '30%',
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
          {
            message: '必须包含数字',
            pattern: /[0-9]/,
          },
          {
            max: 16,
            whitespace: true,
            message: '最长为 16 位',
          },
          {
            min: 6,
            whitespace: true,
            message: '最小为 6 位',
          },
        ],
      },
      editable: isEditable,
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
      },
      editable: isEditable,
    },
    {
      title: '描述',
      dataIndex: 'decs',
    },
    {
      title: '启用/禁用',
      dataIndex: 'enabled',
      renderFormItem: (_) => {
        return <Switch />;
      },
    },
    {
      title: '操作',
      valueType: 'option',
      width: 250,
      render: () => {
        return null;
      },
    },
  ];
  
  const getKeys = (data: any) => data.map((item: any) => item.id);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          const id = Date.now();
          setDataSource([...dataSource, { id, enabled: true }])
          setEditableRowKeys([...editableKeys, id])
        }}
      >
        新增
      </Button>
      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
        <SortableContext items={dataSource.map((i) => i.id) as any[]} strategy={verticalListSortingStrategy}>
          <EditableProTable<DataSourceType>
            headerTitle="可编辑表格"
            columns={columns}
            rowKey="id"
            scroll={{
              x: 960,
            }}
            value={dataSource}
            onChange={setDataSource}
            recordCreatorProps={false}
            toolBarRender={() => {
              return [
                <Button
                  type="primary"
                  key="save"
                  onClick={() => {
                    // dataSource 就是当前数据，可以调用 api 将其保存
                    console.log(dataSource);
                  }}
                >
                  保存数据
                </Button>,
              ];
            }}
            editable={{
              type: 'multiple',
              editableKeys,
              actionRender: (row, config, defaultDoms) => {
                return [defaultDoms.delete];
              },
              onValuesChange: (record, recordList) => {
                setDataSource(recordList);
              },
              onChange: setEditableRowKeys,
            }}
            components={{
              body: {
                  row: Row,
              },
            }}
          />
        </SortableContext>
      </DndContext>
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};
export default App