//api request for the below info
//https://waterservices.usgs.gov/nwis/iv/?format=json&sites=14301000&parameterCd=00060,00065&siteType=ST&siteStatus=all

export default [{
    "name": "ns1:timeSeriesResponseType",
    "declaredType": "org.cuahsi.waterml.TimeSeriesResponseType",
    "scope": "javax.xml.bind.JAXBElement$GlobalScope",
    "value": {
        "queryInfo": {
            "queryURL": "http://waterservices.usgs.gov/nwis/iv/format=json&sites=14301000",
            "criteria": {
                "locationParam": "[ALL:14301000]",
                "variableParam": "ALL",
                "parameter": []
            },
            "note": [
                {
                    "value": "[ALL:14301000]",
                    "title": "filter:sites"
                },
                {
                    "value": "[mode=LATEST, modifiedSince=null]",
                    "title": "filter:timeRange"
                },
                {
                    "value": "methodIds=[ALL]",
                    "title": "filter:methodId"
                },
                {
                    "value": "2019-03-08T21:53:15.200Z",
                    "title": "requestDT"
                },
                {
                    "value": "935db4f0-41ec-11e9-9bb5-6cae8b663fb6",
                    "title": "requestId"
                },
                {
                    "value": "Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.",
                    "title": "disclaimer"
                },
                {
                    "value": "vaas01",
                    "title": "server"
                }
            ]
        },
        "timeSeries": [
            {
                "sourceInfo": {
                    "siteName": "NEHALEM RIVER NEAR FOSS, OR",
                    "siteCode": [
                        {
                            "value": "14301000",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-08:00",
                            "zoneAbbreviation": "PST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-07:00",
                            "zoneAbbreviation": "PDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 45.7039986,
                            "longitude": -123.755405
                        },
                        "localSiteXY": []
                    },
                    "note": [],
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "name": "siteTypeCd"
                        },
                        {
                            "value": "17100202",
                            "name": "hucCd"
                        },
                        {
                            "value": "41",
                            "name": "stateCd"
                        },
                        {
                            "value": "41057",
                            "name": "countyCd"
                        }
                    ]
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00060",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807197,
                            "default": true
                        }
                    ],
                    "variableName": "Streamflow, ft&#179;/s",
                    "variableDescription": "Discharge, cubic feet per second",
                    "valueType": "Derived Value",
                    "unit": {
                        "unitCode": "ft3/s"
                    },
                    "options": {
                        "option": [
                            {
                                "name": "Statistic",
                                "optionCode": "00000"
                            }
                        ]
                    },
                    "note": [],
                    "noDataValue": -999999,
                    "variableProperty": [],
                    "oid": "45807197"
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "1370",
                                "qualifiers": [
                                    "P"
                                ],
                                "dateTime": "2019-03-08T13:15:00.000-08:00"
                            }
                        ],
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd"
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodDescription": "",
                                "methodID": 117381
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:14301000:00060:00000"
            },
            {
                "sourceInfo": {
                    "siteName": "NEHALEM RIVER NEAR FOSS, OR",
                    "siteCode": [
                        {
                            "value": "14301000",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-08:00",
                            "zoneAbbreviation": "PST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-07:00",
                            "zoneAbbreviation": "PDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 45.7039986,
                            "longitude": -123.755405
                        },
                        "localSiteXY": []
                    },
                    "note": [],
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "name": "siteTypeCd"
                        },
                        {
                            "value": "17100202",
                            "name": "hucCd"
                        },
                        {
                            "value": "41",
                            "name": "stateCd"
                        },
                        {
                            "value": "41057",
                            "name": "countyCd"
                        }
                    ]
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00065",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807202,
                            "default": true
                        }
                    ],
                    "variableName": "Gage height, ft",
                    "variableDescription": "Gage height, feet",
                    "valueType": "Derived Value",
                    "unit": {
                        "unitCode": "ft"
                    },
                    "options": {
                        "option": [
                            {
                                "name": "Statistic",
                                "optionCode": "00000"
                            }
                        ]
                    },
                    "note": [],
                    "noDataValue": -999999,
                    "variableProperty": [],
                    "oid": "45807202"
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "5.30",
                                "qualifiers": [
                                    "P"
                                ],
                                "dateTime": "2019-03-08T13:15:00.000-08:00"
                            }
                        ],
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd"
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodDescription": "",
                                "methodID": 117382
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:14301000:00065:00000"
            }
        ]
    },
    "nil": false,
    "globalScope": true,
    "typeSubstituted": false
}];