import { useState, useEffect } from 'react';

// next
import dynamic from 'next/dynamic';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import useConfig from 'hooks/useConfig';

// third-party
import { Props as ChartProps } from 'react-apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// ==============================|| MARKETING CARD CHART ||============================== //

const ChinaDiscountChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();

  // chart options
  const areaChartOptions = {
    chart: {
      id: 'new-stack-chart',
      sparkline: {
        enabled: true
      },
      height: 100,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: false
      }
    },
    stroke: {
      curve: 'straight',
      width: 1.5
    },
    grid: {
      show: false
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    tooltip: {
      theme: mode === 'dark' ? 'dark' : 'light',
      x: {
        show: false
      },
      y: {
        formatter(val: number) {
          return `$ ${val}`;
        }
      }
    }
  };

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      tooltip: {
        theme: mode === 'dark' ? 'dark' : 'light'
      }
    }));
  }, [mode, primary, secondary, line, theme]);

  const [series] = useState([
    {
        name: 'China',
        data: [{"x":"1990-2-28 18:00","y":null},{"x":"1990-3-31 18:00","y":null},{"x":"1990-4-30 19:00","y":null},{"x":"1990-5-31 19:00","y":null},{"x":"1990-6-30 19:00","y":null},{"x":"1990-7-31 19:00","y":"7.92"},{"x":"1990-8-31 19:00","y":"7.92"},{"x":"1990-9-30 19:00","y":"7.92"},{"x":"1990-10-31 18:00","y":"7.92"},{"x":"1990-11-30 18:00","y":"7.92"},{"x":"1990-12-31 18:00","y":"7.92"},{"x":"1991-1-31 18:00","y":"7.92"},{"x":"1991-2-28 18:00","y":"7.92"},{"x":"1991-3-31 18:00","y":"7.2"},{"x":"1991-4-30 19:00","y":"7.2"},{"x":"1991-5-31 19:00","y":"7.2"},{"x":"1991-6-30 19:00","y":"7.2"},{"x":"1991-7-31 19:00","y":"7.2"},{"x":"1991-8-31 19:00","y":"7.2"},{"x":"1991-9-30 19:00","y":"7.2"},{"x":"1991-10-31 18:00","y":"7.2"},{"x":"1991-11-30 18:00","y":"7.2"},{"x":"1991-12-31 18:00","y":"7.2"},{"x":"1992-1-31 18:00","y":"7.2"},{"x":"1992-2-29 18:00","y":"7.2"},{"x":"1992-3-31 18:00","y":"7.2"},{"x":"1992-4-30 19:00","y":"7.2"},{"x":"1992-5-31 19:00","y":"7.2"},{"x":"1992-6-30 19:00","y":"7.2"},{"x":"1992-7-31 19:00","y":"7.2"},{"x":"1992-8-31 19:00","y":"7.2"},{"x":"1992-9-30 19:00","y":"7.2"},{"x":"1992-10-31 18:00","y":"7.2"},{"x":"1992-11-30 18:00","y":"7.2"},{"x":"1992-12-31 18:00","y":"7.2"},{"x":"1993-1-31 18:00","y":"7.2"},{"x":"1993-2-28 18:00","y":"7.2"},{"x":"1993-3-31 18:00","y":"7.2"},{"x":"1993-4-30 19:00","y":"8.46"},{"x":"1993-5-31 19:00","y":"8.46"},{"x":"1993-6-30 19:00","y":"10.08"},{"x":"1993-7-31 19:00","y":"10.08"},{"x":"1993-8-31 19:00","y":"10.08"},{"x":"1993-9-30 19:00","y":"10.08"},{"x":"1993-10-31 18:00","y":"10.08"},{"x":"1993-11-30 18:00","y":"10.08"},{"x":"1993-12-31 18:00","y":"10.08"},{"x":"1994-1-31 18:00","y":"10.08"},{"x":"1994-2-28 18:00","y":"10.08"},{"x":"1994-3-31 18:00","y":"10.08"},{"x":"1994-4-30 19:00","y":"10.08"},{"x":"1994-5-31 19:00","y":"10.08"},{"x":"1994-6-30 19:00","y":"10.08"},{"x":"1994-7-31 19:00","y":"10.08"},{"x":"1994-8-31 19:00","y":"10.08"},{"x":"1994-9-30 19:00","y":"10.08"},{"x":"1994-10-31 18:00","y":"10.08"},{"x":"1994-11-30 18:00","y":"10.08"},{"x":"1994-12-31 18:00","y":"10.26"},{"x":"1995-1-31 18:00","y":"10.26"},{"x":"1995-2-28 18:00","y":"10.26"},{"x":"1995-3-31 18:00","y":"10.26"},{"x":"1995-4-30 19:00","y":"10.26"},{"x":"1995-5-31 19:00","y":"10.26"},{"x":"1995-6-30 19:00","y":"10.44"},{"x":"1995-7-31 19:00","y":"10.44"},{"x":"1995-8-31 19:00","y":"10.44"},{"x":"1995-9-30 19:00","y":"10.44"},{"x":"1995-10-31 18:00","y":"10.44"},{"x":"1995-11-30 18:00","y":"10.44"},{"x":"1995-12-31 18:00","y":"10.44"},{"x":"1996-1-31 18:00","y":"10.44"},{"x":"1996-2-29 18:00","y":"10.44"},{"x":"1996-3-31 18:00","y":"10.44"},{"x":"1996-4-30 19:00","y":null},{"x":"1996-5-31 19:00","y":null},{"x":"1996-6-30 19:00","y":null},{"x":"1996-7-31 19:00","y":null},{"x":"1996-8-31 19:00","y":null},{"x":"1996-9-30 19:00","y":null},{"x":"1996-10-31 18:00","y":null},{"x":"1996-11-30 18:00","y":null},{"x":"1996-12-31 18:00","y":null},{"x":"1997-1-31 18:00","y":null},{"x":"1997-2-28 18:00","y":null},{"x":"1997-3-31 18:00","y":null},{"x":"1997-4-30 19:00","y":null},{"x":"1997-5-31 19:00","y":null},{"x":"1997-6-30 19:00","y":null},{"x":"1997-7-31 19:00","y":null},{"x":"1997-8-31 19:00","y":null},{"x":"1997-9-30 19:00","y":"8.55"},{"x":"1997-10-31 18:00","y":"8.55"},{"x":"1997-11-30 18:00","y":"8.55"},{"x":"1997-12-31 18:00","y":"8.55"},{"x":"1998-1-31 18:00","y":"8.55"},{"x":"1998-2-28 18:00","y":"6.39"},{"x":"1998-3-31 18:00","y":"6.39"},{"x":"1998-4-30 19:00","y":"6.39"},{"x":"1998-5-31 19:00","y":"6.39"},{"x":"1998-6-30 19:00","y":"5.22"},{"x":"1998-7-31 19:00","y":"5.22"},{"x":"1998-8-31 19:00","y":"5.22"},{"x":"1998-9-30 19:00","y":"5.22"},{"x":"1998-10-31 18:00","y":"5.22"},{"x":"1998-11-30 18:00","y":"4.59"},{"x":"1998-12-31 18:00","y":"4.59"},{"x":"1999-1-31 18:00","y":"4.59"},{"x":"1999-2-28 18:00","y":"4.59"},{"x":"1999-3-31 18:00","y":"4.59"},{"x":"1999-4-30 19:00","y":"4.59"},{"x":"1999-5-31 19:00","y":"3.24"},{"x":"1999-6-30 19:00","y":"3.24"},{"x":"1999-7-31 19:00","y":"3.24"},{"x":"1999-8-31 19:00","y":"3.24"},{"x":"1999-9-30 19:00","y":"3.24"},{"x":"1999-10-31 18:00","y":"3.24"},{"x":"1999-11-30 18:00","y":"3.24"},{"x":"1999-12-31 18:00","y":"3.24"},{"x":"2000-1-31 18:00","y":"3.24"},{"x":"2000-2-29 18:00","y":"3.24"},{"x":"2000-3-31 18:00","y":"3.24"},{"x":"2000-4-30 19:00","y":"3.24"},{"x":"2000-5-31 19:00","y":"3.24"},{"x":"2000-6-30 19:00","y":"3.24"},{"x":"2000-7-31 19:00","y":"3.24"},{"x":"2000-8-31 19:00","y":"3.24"},{"x":"2000-9-30 19:00","y":"3.24"},{"x":"2000-10-31 18:00","y":"3.24"},{"x":"2000-11-30 18:00","y":"3.24"},{"x":"2000-12-31 18:00","y":"3.24"},{"x":"2001-1-31 18:00","y":"3.24"},{"x":"2001-2-28 18:00","y":"3.24"},{"x":"2001-3-31 18:00","y":"3.24"},{"x":"2001-4-30 19:00","y":"3.24"},{"x":"2001-5-31 19:00","y":"3.24"},{"x":"2001-6-30 19:00","y":"3.24"},{"x":"2001-7-31 19:00","y":"3.24"},{"x":"2001-8-31 19:00","y":"3.24"},{"x":"2001-9-30 19:00","y":"3.24"},{"x":"2001-10-31 18:00","y":"3.24"},{"x":"2001-11-30 18:00","y":"3.24"},{"x":"2001-12-31 18:00","y":"3.24"},{"x":"2002-1-31 18:00","y":"2.7"},{"x":"2002-2-28 18:00","y":"2.7"},{"x":"2002-3-31 18:00","y":"2.7"},{"x":"2002-4-30 19:00","y":"2.7"},{"x":"2002-5-31 19:00","y":"2.7"},{"x":"2002-6-30 19:00","y":"2.7"},{"x":"2002-7-31 19:00","y":"2.7"},{"x":"2002-8-31 19:00","y":"2.7"},{"x":"2002-9-30 19:00","y":"2.7"},{"x":"2002-10-31 18:00","y":"2.7"},{"x":"2002-11-30 18:00","y":"2.7"},{"x":"2002-12-31 18:00","y":"2.7"},{"x":"2003-1-31 18:00","y":"2.7"},{"x":"2003-2-28 18:00","y":"2.7"},{"x":"2003-3-31 18:00","y":"2.7"},{"x":"2003-4-30 19:00","y":"2.7"},{"x":"2003-5-31 19:00","y":"2.7"},{"x":"2003-6-30 19:00","y":"2.7"},{"x":"2003-7-31 19:00","y":"2.7"},{"x":"2003-8-31 19:00","y":"2.7"},{"x":"2003-9-30 19:00","y":"2.7"},{"x":"2003-10-31 18:00","y":"2.7"},{"x":"2003-11-30 18:00","y":"2.7"},{"x":"2003-12-31 18:00","y":"2.7"},{"x":"2004-1-31 18:00","y":"2.7"},{"x":"2004-2-29 18:00","y":"2.7"},{"x":"2004-3-31 18:00","y":"2.7"},{"x":"2004-4-30 19:00","y":"2.7"},{"x":"2004-5-31 19:00","y":"2.7"},{"x":"2004-6-30 19:00","y":"2.7"},{"x":"2004-7-31 19:00","y":"2.7"},{"x":"2004-8-31 19:00","y":"2.7"},{"x":"2004-9-30 19:00","y":"3.33"},{"x":"2004-10-31 18:00","y":"3.33"},{"x":"2004-11-30 18:00","y":"3.33"},{"x":"2004-12-31 18:00","y":"3.33"},{"x":"2005-1-31 18:00","y":"3.33"},{"x":"2005-2-28 18:00","y":"3.33"},{"x":"2005-3-31 18:00","y":"3.33"},{"x":"2005-4-30 19:00","y":"3.33"},{"x":"2005-5-31 19:00","y":"3.33"},{"x":"2005-6-30 19:00","y":"3.33"},{"x":"2005-7-31 19:00","y":"3.33"},{"x":"2005-8-31 19:00","y":"3.33"},{"x":"2005-9-30 19:00","y":"3.33"},{"x":"2005-10-31 18:00","y":"3.33"},{"x":"2005-11-30 18:00","y":"3.33"},{"x":"2005-12-31 18:00","y":"3.33"},{"x":"2006-1-31 18:00","y":"3.33"},{"x":"2006-2-28 18:00","y":"3.33"},{"x":"2006-3-31 18:00","y":"3.33"},{"x":"2006-4-30 19:00","y":"3.33"},{"x":"2006-5-31 19:00","y":"3.33"},{"x":"2006-6-30 19:00","y":"3.33"},{"x":"2006-7-31 19:00","y":"3.33"},{"x":"2006-8-31 19:00","y":"3.33"},{"x":"2006-9-30 19:00","y":"3.33"},{"x":"2006-10-31 18:00","y":"3.33"},{"x":"2006-11-30 18:00","y":"3.33"},{"x":"2006-12-31 18:00","y":"3.33"},{"x":"2007-1-31 18:00","y":"3.33"},{"x":"2007-2-28 18:00","y":"3.33"},{"x":"2007-3-31 19:00","y":"3.33"},{"x":"2007-4-30 19:00","y":"3.33"},{"x":"2007-5-31 19:00","y":"3.33"},{"x":"2007-6-30 19:00","y":"3.33"},{"x":"2007-7-31 19:00","y":"3.33"},{"x":"2007-8-31 19:00","y":"3.33"},{"x":"2007-9-30 19:00","y":"3.33"},{"x":"2007-10-31 19:00","y":"3.33"},{"x":"2007-11-30 18:00","y":"3.33"},{"x":"2007-12-31 18:00","y":"4.14"},{"x":"2008-1-31 18:00","y":"4.14"},{"x":"2008-2-29 18:00","y":"4.14"},{"x":"2008-3-31 19:00","y":"4.14"},{"x":"2008-4-30 19:00","y":"4.14"},{"x":"2008-5-31 19:00","y":"4.14"},{"x":"2008-6-30 19:00","y":"4.14"},{"x":"2008-7-31 19:00","y":"4.14"},{"x":"2008-8-31 19:00","y":"4.14"},{"x":"2008-9-30 19:00","y":"4.14"},{"x":"2008-10-31 19:00","y":"3.06"},{"x":"2008-11-30 18:00","y":"2.79"},{"x":"2008-12-31 18:00","y":"2.79"},{"x":"2009-1-31 18:00","y":"2.79"},{"x":"2009-2-28 18:00","y":"2.79"},{"x":"2009-3-31 19:00","y":"2.79"},{"x":"2009-4-30 19:00","y":"2.79"},{"x":"2009-5-31 19:00","y":"2.79"},{"x":"2009-6-30 19:00","y":"2.79"},{"x":"2009-7-31 19:00","y":"2.79"},{"x":"2009-8-31 19:00","y":"2.79"},{"x":"2009-9-30 19:00","y":"2.79"},{"x":"2009-10-31 19:00","y":"2.79"},{"x":"2009-11-30 18:00","y":"2.79"},{"x":"2009-12-31 18:00","y":"2.79"},{"x":"2010-1-31 18:00","y":"2.79"},{"x":"2010-2-28 18:00","y":"2.79"},{"x":"2010-3-31 19:00","y":"2.79"},{"x":"2010-4-30 19:00","y":"2.79"},{"x":"2010-5-31 19:00","y":"2.79"},{"x":"2010-6-30 19:00","y":"2.79"},{"x":"2010-7-31 19:00","y":"2.79"},{"x":"2010-8-31 19:00","y":"2.79"},{"x":"2010-9-30 19:00","y":"2.79"},{"x":"2010-10-31 19:00","y":"2.79"},{"x":"2010-11-30 18:00","y":"3.25"},{"x":"2010-12-31 18:00","y":"3.25"},{"x":"2011-1-31 18:00","y":"3.25"},{"x":"2011-2-28 18:00","y":"3.25"},{"x":"2011-3-31 19:00","y":"3.25"},{"x":"2011-4-30 19:00","y":"3.25"},{"x":"2011-5-31 19:00","y":"3.25"},{"x":"2011-6-30 19:00","y":"3.25"},{"x":"2011-7-31 19:00","y":"3.25"},{"x":"2011-8-31 19:00","y":"3.25"},{"x":"2011-9-30 19:00","y":"3.25"},{"x":"2011-10-31 19:00","y":"3.25"},{"x":"2011-11-30 18:00","y":"3.25"},{"x":"2011-12-31 18:00","y":"3.25"},{"x":"2012-1-31 18:00","y":"3.25"},{"x":"2012-2-29 18:00","y":"3.25"},{"x":"2012-3-31 19:00","y":"3.25"},{"x":"2012-4-30 19:00","y":"3.25"},{"x":"2012-5-31 19:00","y":"3.25"},{"x":"2012-6-30 19:00","y":"3.25"},{"x":"2012-7-31 19:00","y":"3.25"},{"x":"2012-8-31 19:00","y":"3.25"},{"x":"2012-9-30 19:00","y":"3.25"},{"x":"2012-10-31 19:00","y":"3.25"},{"x":"2012-11-30 18:00","y":null},{"x":"2012-12-31 18:00","y":"3.25"},{"x":"2013-1-31 18:00","y":"3.25"},{"x":"2013-2-28 18:00","y":"3.25"},{"x":"2013-3-31 19:00","y":"3.25"},{"x":"2013-4-30 19:00","y":"3.25"},{"x":"2013-5-31 19:00","y":"3.25"},{"x":"2013-6-30 19:00","y":"3.25"},{"x":"2013-7-31 19:00","y":"3.25"},{"x":"2013-8-31 19:00","y":"3.25"},{"x":"2013-9-30 19:00","y":"3.25"},{"x":"2013-10-31 19:00","y":"3.25"},
        {"x":"2013-11-30 18:00","y":"3.25"},{"x":"2013-12-31 18:00","y":"3.25"},{"x":"2014-1-31 18:00","y":"3.25"},{"x":"2014-2-28 18:00","y":"3.25"},{"x":"2014-3-31 19:00","y":"3.25"},{"x":"2014-4-30 19:00","y":"3.25"},{"x":"2014-5-31 19:00","y":"3.25"},{"x":"2014-6-30 19:00","y":"3.25"},{"x":"2014-7-31 19:00","y":"3.25"},{"x":"2014-8-31 19:00","y":"3.25"},{"x":"2014-9-30 19:00","y":"3.25"},{"x":"2014-10-31 19:00","y":"3.25"},{"x":"2014-11-30 18:00","y":"3.25"},{"x":"2014-12-31 18:00","y":"3.25"},{"x":"2015-1-31 18:00","y":"3.25"},{"x":"2015-2-28 18:00","y":"3.25"},{"x":"2015-3-31 19:00","y":"3.25"},{"x":"2015-4-30 19:00","y":"3.25"},{"x":"2015-5-31 19:00","y":"3.25"},{"x":"2015-6-30 19:00","y":"3.25"},{"x":"2015-7-31 19:00","y":"3.25"},{"x":"2015-8-31 19:00","y":"3.25"},{"x":"2015-9-30 19:00","y":"3.25"},{"x":"2015-10-31 19:00","y":"2.9"},{"x":"2015-11-30 18:00","y":"2.9"},{"x":"2015-12-31 18:00","y":"2.9"},{"x":"2016-1-31 18:00","y":"2.9"},{"x":"2016-2-29 18:00","y":"2.9"},{"x":"2016-3-31 19:00","y":"2.9"},{"x":"2016-4-30 19:00","y":"2.9"},{"x":"2016-5-31 19:00","y":"2.9"},{"x":"2016-6-30 19:00","y":"2.9"},{"x":"2016-7-31 19:00","y":"2.9"},{"x":"2016-8-31 19:00","y":"2.9"},{"x":"2016-9-30 19:00","y":"2.9"},{"x":"2016-10-31 19:00","y":"2.9"},{"x":"2016-11-30 18:00","y":"2.9"},{"x":"2016-12-31 18:00","y":"2.9"},{"x":"2017-1-31 18:00","y":"2.9"},{"x":"2017-2-28 18:00","y":"2.9"},{"x":"2017-3-31 19:00","y":"2.9"},{"x":"2017-4-30 19:00","y":"2.9"},{"x":"2017-5-31 19:00","y":"2.9"},{"x":"2017-6-30 19:00","y":"2.9"},{"x":"2017-7-31 19:00","y":"2.9"},{"x":"2017-8-31 19:00","y":"2.9"},{"x":"2017-9-30 19:00","y":"2.9"},{"x":"2017-10-31 19:00","y":"2.9"},{"x":"2017-11-30 18:00","y":"2.9"},{"x":"2017-12-31 18:00","y":"2.9"},{"x":"2018-1-31 18:00","y":"2.9"},{"x":"2018-2-28 18:00","y":"2.9"},{"x":"2018-3-31 19:00","y":"2.9"},{"x":"2018-4-30 19:00","y":"2.9"},{"x":"2018-5-31 19:00","y":"2.9"},{"x":"2018-6-30 19:00","y":"2.9"},{"x":"2018-7-31 19:00","y":"2.9"},{"x":"2018-8-31 19:00","y":"2.9"},{"x":"2018-9-30 19:00","y":"2.9"},{"x":"2018-10-31 19:00","y":"2.9"},{"x":"2018-11-30 18:00","y":"2.9"},{"x":"2018-12-31 18:00","y":"2.9"},{"x":"2019-1-31 18:00","y":"2.9"},{"x":"2019-2-28 18:00","y":"2.9"},{"x":"2019-3-31 19:00","y":"2.9"},{"x":"2019-4-30 19:00","y":"2.9"},{"x":"2019-5-31 19:00","y":"2.9"},{"x":"2019-6-30 19:00","y":"2.9"},{"x":"2019-7-31 19:00","y":"2.9"},{"x":"2019-8-31 19:00","y":"2.9"},{"x":"2019-9-30 19:00","y":"2.9"},{"x":"2019-10-31 19:00","y":"2.9"},{"x":"2019-11-30 18:00","y":"2.9"},{"x":"2019-12-31 18:00","y":"2.9"},{"x":"2020-1-31 18:00","y":"2.9"},{"x":"2020-2-29 18:00","y":"2.9"},{"x":"2020-3-31 19:00","y":"2.9"},{"x":"2020-4-30 19:00","y":"2.9"},{"x":"2020-5-31 19:00","y":"2.9"},{"x":"2020-6-30 19:00","y":"2.9"},{"x":"2020-7-31 19:00","y":"2.9"},{"x":"2020-8-31 19:00","y":"2.9"},{"x":"2020-9-30 19:00","y":"2.9"},{"x":"2020-10-31 19:00","y":"2.9"},{"x":"2020-11-30 18:00","y":"2.9"},{"x":"2020-12-31 18:00","y":"2.9"},{"x":"2021-1-31 18:00","y":"2.9"},{"x":"2021-2-28 18:00","y":"2.9"},{"x":"2021-3-31 19:00","y":"2.9"},{"x":"2021-4-30 19:00","y":"2.9"},{"x":"2021-5-31 19:00","y":"2.9"},{"x":"2021-6-30 19:00","y":"2.9"},{"x":"2021-7-31 19:00","y":"2.9"},{"x":"2021-8-31 19:00","y":"2.9"},{"x":"2021-9-30 19:00","y":"2.9"},{"x":"2021-10-31 19:00","y":"2.9"},{"x":"2021-11-30 18:00","y":"2.9"},{"x":"2021-12-31 18:00","y":"2.9"},{"x":"2022-1-31 18:00","y":"2.9"},{"x":"2022-2-28 18:00","y":"2.9"},{"x":"2022-3-31 19:00","y":"2.9"},{"x":"2022-4-30 19:00","y":"2.9"},{"x":"2022-5-31 19:00","y":"2.9"}]},
    ]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
};

export default ChinaDiscountChart;