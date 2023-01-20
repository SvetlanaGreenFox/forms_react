import React from "react";
import DataTable from "./DataTable.js";
import _ from "lodash";
// import { sortDates } from "./utils.js";

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        date: "",
        distance: "",
      },
      dataTable: [],
    };
  }

  deleteItem = (index) => {
    const { dataTable } = this.state;
    const filterData = dataTable.filter((item) => item.id !== index);
    this.setState({ dataTable: filterData });
  };

  editItem = (index) => {
    const { dataTable } = this.state;
    const targetItem = dataTable.find((item) => item.id === index);
    const { date, distance } = targetItem;
    this.setState({ form: { date: date, distance: distance } });
    this.deleteItem(index);
  };

  handleForm = (e) => {
    e.preventDefault();
    const key = _.uniqueId();
    const { form, dataTable } = this.state;

    const d = dataTable.findIndex((elem) => elem.date === form.date);

    const item = {
      id: key,
      date: form.date,
      distance:
        d === -1 ? form.distance : +form.distance + +dataTable[d].distance,
    };

    this.setState({
      form: { date: "", distance: "" },
      dataTable: [...dataTable.filter((elem) => elem.date !== form.date), item],
    });
  };

  handleFormRow = ({ target }) => {
    const value = target.value;
    const { form } = this.state;
    this.setState({
      form: { ...form, [target.name]: value },
    });
  };

  render() {
    const { form, dataTable } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form className="myForm" onSubmit={this.handleForm}>
            <div className="input-wrapper">
              <label forHTML="date" className="form-label">
                Дата (ДД.ММ.ГГ)
              </label>
              <input
                type="date"
                name="date"
                className="form-control"
                id="date"
                placeholder=""
                onChange={this.handleFormRow}
                value={form.date}
              />
            </div>
            <div className="input-wrapper">
              <label forHTML="distance" className="form-label">
                Пройдено км
              </label>
              <input
                type="number"
                name="distance"
                className="form-control"
                id="distance"
                placeholder=""
                onChange={this.handleFormRow}
                value={form.distance}
              />
            </div>
            <div className="button-wrapper">
              <button>OK</button>
            </div>
          </form>
          <table>
            <tr className="table-header">
              <th>Дата (ДД.ММ.ГГ)</th>
              <th>Пройдено км</th>
              <th>Действия</th>
            </tr>
            <DataTable
              data={dataTable}
              delete={this.deleteItem}
              edit={this.editItem}
            />
          </table>
        </div>
      </div>
    );
  }
}
