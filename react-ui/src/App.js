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
            {
              name: "auburn",
              city: "auburn"
            },
            {
              name: "birmingham",
              city: "birmingham"
            },
            {
              name: "dothan",
              city: "dothan"
            },
            {
              name: "florence / muscle shoals",
              city: "shoals"
            },
            {
              name: "gadsden-anniston",
              city: "gadsden"
            },
            {
              name: "huntsville / decatur",
              city: "huntsville"
            },
            {
              name: "mobile",
              city: "mobile"
            },
            {
              name: "montgomery",
              city: "montgomery"
            },
            {
              name: "tuscaloosa",
              city: "tuscaloosa"
            },
          ],
        },
        {
          name: "Alaska",
          cities: [{
            name: "anchorage / mat-su",
            city: "anchorage"
          }, {
            name: "fairbanks",
            city: "fairbanks"
          }, {
            name: "kenai peninsula",
            city: "kenai"
          }, {
            name: "southeast alaska",
            city: "juneau"
          }],
        },
        {
          name: "Arizona",
          cities: [
            {
              name: "flagstaff / sedona",
              city: "flagstaff"
            },
            {
              name: "mohave county",
              city: "mohave"
            },
            {
              name: "phoenix",
              city: "phoenix"
            },
            {
              name: "prescott",
              city: "prescott"
            },
            {
              name: "show low",
              city: "showlow"
            },
            {
              name: "sierra vista",
              city: "sierravista"
            },
            {
              name: "tucson",
              city: "tucson"
            },
            {
              name: "yuma",
              city: "yuma"
            }
          ],
        },
        {
          name: "Arkansas",
          cities: [
            {
              name: "fayetteville",
              city: "fayar"
            },
            {
              name: "fort smith",
              city: "fortsmith"
            },
            {
              name: "jonesboro",
              city: "jonesboro"
            },
            {
              name: "little rock",
              city: "littlerock"
            },
            {
              name: "texarkana",
              city: "texarkana"
            },

          ],
        },
        {
          name: "California",
          cities: [
            {
              name: "bakersfield",
              city: "bakersfield"
            },
            {
              name: "chico",
              city: "chico"
            },
            {
              name: "fresno / madera",
              city: "fresno"
            },
            {
              name: "gold country",
              city: "goldcountry"
            },
            {
              name: "hanford-corcoran",
              city: "hanford"
            },
            {
              name: "humboldt county",
              city: "humboldt"
            },
            {
              name: "imperial county",
              city: "imperial"
            },
            {
              name: "inland empire",
              city: "inlandempire"
            },
            {
              name: "los angeles",
              city: "losangeles"
            },
            {
              name: "mendocino county",
              city: "mendocino"
            },
            {
              name: "merced",
              city: "merced"
            },
            {
              name: "modesto",
              city: "modesto"
            },
            {
              name: "monterey bay",
              city: "monterey"
            },
            {
              name: "orange county",
              city: "orangecounty"
            },
            {
              name: "palm springs",
              city: "palmsprings"
            },
            {
              name: "redding",
              city: "redding"
            },
            {
              name: "sacramento",
              city: "sacramento"
            },
            {
              name: "san diego",
              city: "sandiego"
            },
            {
              name: "san francisco bay area",
              city: "sfbay"
            },
            {
              name: "san luis obispo",
              city: "slo"
            },
            {
              name: "santa barbara",
              city: "santabarbara"
            },
            {
              name: "santa maria",
              city: "santamaria"
            },
            {
              name: "siskiyou county",
              city: "siskiyou"
            },
            {
              name: "stockton",
              city: "stockton"
            },
            {
              name: "susanville",
              city: "susanville"
            },
            {
              name: "ventura county",
              city: "ventura"
            },
            {
              name: "visalia-tulare",
              city: "visalia"
            },
            {
              name: "yuba-sutter",
              city: "yubasutter"
            }
          ],
        },
        {
          name: "Colorado",
          cities: [
            {
              name: "boulder",
              city: "boulder"
            },
            {
              name: "colorado springs",
              city: "cosprings"
            },
            {
              name: "denver",
              city: "denver"
            },
            {
              name: "eastern CO",
              city: "eastco"
            },
            {
              name: "fort collins / north CO",
              city: "fortcollins"
            },
            {
              name: "high rockies",
              city: "rockies"
            },
            {
              name: "pueblo",
              city: "pueblo"
            },
            {
              name: "western slope",
              city: "westslope"
            }
          ],
        },
        {
          name: "Connecticut",
          cities: [
            {
              name: "eastern CT",
              city: "newlondon"
            },
            {
              name: "hartford",
              city: "hartford"
            },
            {
              name: "new haven",
              city: "newhaven"
            },
            {
              name: "northwest CT",
              city: "nwct"
            }
          ],
        },
        {
          name: "Delaware",
          cities: [
            {
              name: "delaware",
              city: "delaware"
            }
          ],
        },
        {
          name: "District of Columbia",
          cities: [
            {
              name: "washington",
              city: "washington"
            }
          ],
        },
        {
          name: "Florida",
          cities: [
            {
              name: "broward county",
              city: "miami"
            },
            {
              name: "daytona beach",
              city: "daytona"
            },
            {
              name: "florida keys",
              city: "keys"
            },
            {
              name: "fort lauderdale",
              city: "miami"
            },
            {
              name: "ft myers / SW florida",
              city: "fortmyers"
            },
            {
              name: "gainesville",
              city: "gainesville"
            },
            {
              name: "heartland florida",
              city: "cfl"
            },
            {
              name: "jacksonville",
              city: "jacksonville"
            },
            {
              name: "lakeland",
              city: "lakeland"
            },
            {
              name: "miami / dade",
              city: "miami"
            },
            {
              name: "north central FL",
              city: "lakecity"
            },
            {
              name: "ocala",
              city: "ocala"
            },
            {
              name: "okaloosa / walton",
              city: "okaloosa"
            },
            {
              name: "orlando",
              city: "orlando"
            },
            {
              name: "panama city",
              city: "panamacity"
            },
            {
              name: "pensacola",
              city: "pensacola"
            },
            {
              name: "sarasota-bradenton",
              city: "sarasota"
            },
            {
              name: "space coast",
              city: "spacecoast"
            },
            {
              name: "st augustine",
              city: "staugustine"
            },
            {
              name: "tallahassee",
              city: "tallahassee"
            },
            {
              name: "tampa bay area",
              city: "tampa"
            },
            {
              name: "treasure coast",
              city: "treasure"
            },
            {
              name: "palm beach county",
              city: "miami"
            }
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
      message: null,
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
        const message = response.data.length === 0 ? "No Result Found" : null;
        this.setState({
          data: response.data,
          loading: false,
          message: message,
        });
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
      message,
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
            <option value={city.city} key={index}>
              {city.name}
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
              autoComplete="off"
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
                    <td>
                      <a href={element.url} target="_blank">
                        {element.url}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
              <span>{message}</span>
            )}
        </div>
      </div>
    );
  }
}
