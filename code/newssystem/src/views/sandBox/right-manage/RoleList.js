import React, { useEffect, useState } from 'react';
import { Table, Tag, Button, Modal, Popover, Switch, Tree } from 'antd'
import { EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import axios from 'axios'

const { confirm } = Modal

const RoleList = () => {
  const [dataSource, setDataSource] = useState([]);
  const [rightList, setRightList] = useState([]);
  const [currentRights, setCurrentRights] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/roles').then(res => {
      setDataSource(res.data)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5000/rights?_embed=children').then(res => {
      setRightList(res.data)
    })
  }, [])

  const confirmMethod = (item) => {
    confirm({
      title: '你确定要删除?',
      icon: <ExclamationCircleFilled />,
      onOk() {
        // console.log(`ok`)
        deleteMethod(item)
      },
      onCancel() {},
    });
  };
  // 删除
  const deleteMethod = (item) => {
    console.log(`item`, item)
    setDataSource(dataSource.filter(data => data.id !== item.id))
    axios.delete(`http://localhost:5000/roles/${item.id}`)
  }

  const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        render: (id) => {
          return <b>{id}</b>
        }
      },
      {
        title: '角色名称',
        dataIndex: 'roleName',
      },
      {
        title: '操作',
        render: (item) => {
          // console.log(`item`, item)
          return (
            <div>
              <Button
                danger
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={() => confirmMethod(item)}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                onClick={() => {
                  console.log(`item`, item)
                  setIsModalOpen(true)
                  setCurrentRights(item.rights)
                  setCurrentId(item.id)
                }}
              />
            </div>
          )
        }
      },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log(`currentRights`, currentRights)
    setIsModalOpen(false);
    // 同步dataSource
    setDataSource(dataSource.map(item => {
      if (item.id === currentId) {
        return {
          ...item,
          rights: currentRights
        }
      }
      return item
    }))
    // patch
    axios.patch(`http://localhost:5000/roles/${currentId}`, { rights: currentRights })

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onCheck = (info) => {
    console.log(`info`, info)
    setCurrentRights(info.checked)
  };
  
  return (
    <div>
      <Table
        rowKey="id"
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5
        }}
      />
      <Modal
        title="权限分配"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tree
          checkStrictly
          checkable
          checkedKeys={currentRights}
          treeData={rightList}
          onCheck={onCheck}
        />
      </Modal>
    </div>
  );
}

export default RoleList;
