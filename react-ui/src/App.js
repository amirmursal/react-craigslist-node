import React from "react";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "Alabama",
      city: "auburn",
      category: "hea",
      states: [
        {
          name: "Alabama",
          cities: [
            "auburn",
            "birmingham",
            "dothan",
            "shoals",
            "gadsden",
            "huntsville",
            "mobile",
            "montgomery",
            "tuscaloosa",
          ],
        },
        {
          name: "Alaska",
          cities: ["anchorage", "fairbanks", "kenai", "juneau"],
        },
        {
          name: "Arizona",
          cities: [
            "flagstaff",
            "mohave",
            "phoenix",
            "prescott",
            "showlow",
            "tucson",
            "yuma",
          ],
        },
        {
          name: "California",
          cities: [
            "bakersfield",
            "chico",
            "fresno",
            "goldcountry",
            "hanford",
            "humboldt",
            "imperial",
            "inlandempire",
            "losangeles",
            "mendocino",
            "merced",
            "modesto",
            "monterey",
            "orangecounty",
            "palmsprings",
            "redding",
            "sacramento",
            "sandiego",
            "sfbay",
            "slo",
            "santabarbara",
            "santamaria",
            "siskiyou",
            "stockton",
            "susanville",
            "ventura",
            "visalia",
            "yubasutter",
          ],
        },
      ],
      categories: [
        {
          name: "Medical + Health",
          category: "hea",
        },
        {
          name: "Business + Management",
          category: "bus",
        },
        {
          name: "Customer Service",
          category: "csr",
        },
        {
          name: "Legal + Paralegal",
          category: "lgl",
        },
        {
          name: "Salon + Spa + Fitness",
          category: "spa",
        },
        {
          name: "Technical Support",
          category: "tch",
        },
        {
          name: "Web + Info Design",
          category: "web",
        },

        {
          name: "Writing + Editing",
          category: "wri",
        },
      ],
      data: [],
      search: "",
      loading: false,
      message: null
    };
  }

  // common input change handler for imput and select
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getCraigslistData = () => {
    const { city, search, category } = this.state;
    this.setState({
      loading: true,
    });
    axios
      .get("/getData/", {
        params: {
          city: city,
          search: search,
          category: category,
        },
      })
      .then((response) => {
        const message = response.data.length === 0 ? "No Result Found" : null
        this.setState({ data: response.data, loading: false, message: message });
      });
  };

  tableToExcel = (table, name) => {
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
      data: [],
    });
    return false;
  };

  render() {
    const {
      state,
      city,
      states,
      data,
      categories,
      category,
      search,
      loading,
      message
    } = this.state;
    const getMajorMethod = () => {
      const view = states.filter(({ name }) => name === state)[0];
      return (
        <select
          value={city}
          className="form-control  mr-sm-2"
          name="city"
          onChange={(event) => this.handleChange(event)}
        >
          {view.cities.map((city, index) => (
            <option value={city} key={index}>
              {city}
            </option>
          ))}
        </select>
      );
    };
    return (
      <div className="container">
        <br />
        <div className="form-inline">
          <div className="form-group">
            <label className="mr-sm-2">State</label>
            <select
              className="form-control mr-sm-2"
              value={state}
              name="state"
              onChange={(event) => this.handleChange(event)}
            >
              {states.map(({ name }, index) => (
                <option value={name} key={index}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="mr-sm-2">City</label>
            {getMajorMethod()}
          </div>
          <div className="form-group">
            <label className="mr-sm-2">Category</label>
            <select
              className="form-control mr-sm-2"
              value={category}
              name="category"
              onChange={(event) => this.handleChange(event)}
            >
              {categories.map(({ name, category }, index) => (
                <option value={category} key={index}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              className="form-control mr-sm-2"
              name="search"
              type="text"
              placeholder="Search..."
              onChange={(event) => this.handleChange(event)}
            />
          </div>
        </div>
        <br />
        <div className="form-inline">
          <div className="form-group">
            <button
              className="btn btn-primary mr-sm-2"
              onClick={() => this.getCraigslistData()}
              disabled={!search}
            >
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}{" "}
              Get Data
            </button>
            {data.length > 0 && (
              <button
                className="btn btn-success mr-sm-2"
                onClick={() => this.tableToExcel("table-to-xls", city)}
              >
                Export to Excel
              </button>
            )}
          </div>
        </div>
        <br />
        <div className="row">
          {data.length > 0 ? (
            <table className="table" id="table-to-xls">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Job Links</th>
                </tr>
              </thead>
              <tbody>
                {data.map((element, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td><a href={element.url} target="_blank">{element.url}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <span>{message}</span>}
        </div>
      </div>
    );
  }
}
