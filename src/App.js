import { Button, Table, Input, Select, Pagination } from 'antd'
import useUser from 'Hook/useUser'

const { Search } = Input
const { Option } = Select

function App() {
  const { users, params, setGender, setKeyword, resetFilter, paginationChange } = useUser()

  const userColumns = [
    {
      title: 'User Name',
      dataIndex: 'username',
    },
    {
      title: 'name',
      dataIndex: 'name',
      sorter: {
        compare: (a, b) => a.username.localeCompare(b.username),
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: {
        compare: (a, b) => a.email.localeCompare(b.email),
      },
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: {
        compare: (a, b) => a.gender.localeCompare(b.gender),
      },
    },
    {
      title: 'Registered Data',
      dataIndex: 'registeredData',
      sorter: {
        compare: (a, b) => a.registeredData.localeCompare(b.registeredData),
      },
    },
  ]


  return (
    <div className='app'>
      <h1>User List</h1>
      <div className='app__filter'>
        <Search placeholder='Search by username, name, email' value={params.keyword} onChange={(e) => setKeyword(e.target.value)} />
        <Select defaultValue='' value={params.gender} onChange={(value) => setGender(value)}>
          <Option value=''>All</Option>
          <Option value='female'>Female</Option>
          <Option value='male'>Male</Option>
        </Select>
        <Button
          onClick={resetFilter}
          style={{ fontSize: 13 }}
        >
          Reset Filter
        </Button>
      </div>
      <div className='app__table'>
        <Table
          loading={users.isLoading}
          columns={userColumns}
          dataSource={users.items}
          pagination={false}
        />

      </div>
      <div className='app__pagination'>
        <Pagination defaultCurrent={1} total={100} onChange={paginationChange} showSizeChanger={true} />
      </div>
    </div>
  )
}

export default App
