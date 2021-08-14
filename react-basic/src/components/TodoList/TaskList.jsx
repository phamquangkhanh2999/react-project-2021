import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1,
    };
  }
  onChangeFilter = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { tasks } = this.props;
    var { filterName, filterStatus } = this.state;
    return (
      <>
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th className='text-center'>STT</th>
              <th className='text-center'>Tên</th>
              <th className='text-center'>Trạng Thái</th>
              <th className='text-center'>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type='text'
                  className='form-control '
                  name='filterName'
                  value={filterName}
                  onChange={this.onChangeFilter}
                />
              </td>
              <td>
                <select
                  name='filterStatus'
                  className='form-control pt-2'
                  value={filterStatus}
                  onChange={this.onChangeFilter}
                >
                  <option value={-1}>Tất Cả</option>
                  <option value={0}>Ẩn</option>
                  <option value={1}>Kích Hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {tasks.map((task, index) => (
              <TaskItem
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
                key={task.id}
                task={task}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default TaskList;
