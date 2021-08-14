import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false,
    };
  }
  componentWillMount() {
    if (this.props.task) {
      const { id, name, status } = this.props.task;
      this.setState({
        id: id,
        name: name,
        status: status,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      const { id, name, status } = nextProps.task;
      this.setState({
        id: id,
        name: name,
        status: status,
      });
    }
  }
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  };
  onClear = () => {
    this.setState({
      name: '',
      status: false,
    });
  };

  render() {
    var { id } = this.state;
    return (
      <>
        <div className='panel panel-warning'>
          <div className='panel-heading'>
            <h3 className='panel-title'>
              {id === '' ? '  Thêm Công Việc' : 'Cập Nhật Công Việc '}
            </h3>
          </div>
          <div className='panel-body'>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label>Tên :</label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <label>Trạng Thái :</label>
              <select
                className='form-control pt-2'
                required='required'
                name='status'
                value={this.state.status}
                onChange={this.onChange}
              >
                <option value={1}>Ẩn</option>
                <option value={0}>Kích Hoạt</option>
              </select>
              <br />
              <div className='text-center'>
                <button type='submit' className='btn btn-warning'>
                  {id === '' ? ' Thêm' : 'Sửa '}
                </button>

                <button className='btn btn-danger ml-5' onClick={this.onClear}>
                  Hủy Bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default TaskForm;
