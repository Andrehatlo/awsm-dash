export default function(dominance) {
    return {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Dominance balance'
        },
        xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            labels: {
                format: '{value}%'
            },
            title: {
                enabled: false
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
            split: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                },
                accessibility: {
                    pointDescriptionFormatter: function (point) {
                        function round(x) {
                            return Math.round(x * 100) / 100;
                        }

                        return (point.index + 1) + ', ' + point.category + ', ' +
                            point.y + ' millions, ' + round(point.percentage) + '%, ' +
                            point.series.name;
                    }
                }
            }
        },
        series: [{
            name: 'BTC',
            data: btc_dominance
        }, {
            name: 'ETH',
            data: eth_dominance
        }, {
            name: 'DOT',
            data: dot_dominance
        }, {
            name: 'XRP',
            data: xrp_dominance
        }, {
            name: 'XLM',
            data: xlm_dominance
        }, {
            name: 'BNB',
            data: bnb_dominance
        }]
    }
}