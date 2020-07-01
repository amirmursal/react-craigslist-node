import React from 'react';
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "Alabama",
      city: "auburn",
      states: [
        {
          name: "Alabama",
          cities: ["auburn", "birmingham", "dothan", "shoals", "gadsden-anniston", "huntsville / decatur", "mobile", "montgomery", "tuscaloosa"],
        },
        {
          name: "Alaska",
          cities: ["anchorage / mat-su", "fairbanks", "kenai peninsula", "southeast alaska"],
        },
      ],
      data: [],
      search: ""
    }
  }

  // common input change handler for imput and select
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getCraigslistData = () => {
    const { city, search } = this.state
    axios.get("/getData/", {
      params: {
        city: city,
        search: search
      }
    }).then(response => {
      this.setState({ data: response.data })
    });
  }

  tableToExcel = (table, name = "data") => {
    var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    var j = 0;
    var tab = document.getElementById(table);
    if (tab == null) {
      return false;
    }
    if (tab.rows.length === 0) {
      return false;
    }

    for (j = 0; j < tab.rows.length; j++) {
      tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
    }

    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
      // If Internet Explorer
      var txtArea1;
      txtArea1.document.open("txt/html", "replace");
      txtArea1.document.write(tab_text);
      txtArea1.document.close();
      txtArea1.focus();
      txtArea1.document.execCommand("SaveAs", true, name + ".xlsx");
    } //other browser not tested on IE 11
    else
      try {
        var blob = new Blob([tab_text], { type: "application/vnd.ms-excel" });
        window.URL = window.URL || window.webkitURL;
        var link = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        if (document.getElementById("caption") != null) {
          a.download = document.getElementById("caption").innerText;
        } else {
          a.download = name;
        }

        a.href = link;

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);
      } catch (e) { }
    this.setState({
      data: []
    });
    return false;
  };

  render() {
    const { state, city, states, data } = this.state;
    const getMajorMethod = () => {
      const view = states.filter(({ name }) => name === state)[0];
      return (
        <div>
          <select
            value={city}
            name="city"
            onChange={(event) => this.handleChange(event)}          >
            {view.cities.map((city, index) => (
              <option value={city} key={index} >{city}</option>
            ))}
          </select>
        </div>
      );
    };
    return (
      <div>
        <select
          value={state}
          name="state"
          onChange={(event) => this.handleChange(event)}
        >
          {states.map(({ name }, index) => (
            <option value={name} key={index}>{name}</option>
          ))}
        </select>

        <div>{getMajorMethod()}</div>
        <input name="search" type="text" onChange={(event) => this.handleChange(event)} />
        <button onClick={() => this.getCraigslistData()}>Get Data</button>
        {data.length > 0 && (
          <button onClick={() => this.tableToExcel("table-to-xls")}>
            Export to Excel
          </button>
        )}
        {data.length > 0 && <table id="table-to-xls">
          <thead>
            <tr>
              <th>Data URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => (
              <tr key={index}>
                <td>{element.url}</td>
              </tr>
            ))}
          </tbody>
        </table>}

      </div >
    );
  }
}

