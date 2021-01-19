import highchartsConfig from "../PriceChart/HighchartsConfig";
import React from 'react';
import {Tile} from "../../Shared/Tile";
import {AppContext} from "../../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "../PriceChart/HighchartsTheme";
import ChartSelect from "../PriceChart/ChartSelect";


ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function () {
    return(
        <AppContext.Consumer>
            {({dominance, changeChartSelect}) =>
                <Tile>
                    {dominance ?
                        <ReactHighcharts config={highchartsConfig(dominance)}/>
                        : <div> LOADING HISTORICAL DATA </div>
                    }
                </Tile>
            }
        </AppContext.Consumer>
    )
}