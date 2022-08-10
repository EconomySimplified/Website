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

const PalladiumChart = () => {
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
      name: 'Palladium Price',
      data: [{"x":"2022-7-11 19:00","y":"1971.21"},{"x":"2022-7-13 16:52","y":"1916.51"},{"x":"2022-7-14 16:19","y":"1842.47"},{"x":"2022-7-14 17:16","y":"1841.66"},{"x":"2022-7-14 17:17","y":"1841.66"},{"x":"2022-7-15 3:30","y":"1782.48"},{"x":"2022-7-15 7:00","y":"1786.52"},{"x":"2022-7-16 3:30","y":"1751"},{"x":"2022-7-16 7:00","y":"1751"},{"x":"2022-7-17 3:30","y":"1751"},{"x":"2022-7-17 7:00","y":"1751"},{"x":"2022-7-18 3:30","y":"1812.55"},{"x":"2022-7-18 7:00","y":"1790.68"},{"x":"2022-7-19 3:30","y":"1812.78"},{"x":"2022-7-19 7:00","y":"1790.57"},{"x":"2022-7-19 14:32","y":"1792"},{"x":"2022-7-19 15:31","y":"1795"},{"x":"2022-7-19 15:42","y":"1798"},{"x":"2022-7-20 7:30","y":"1794"},{"x":"2022-7-20 7:35","y":"1792"},{"x":"2022-7-20 7:40","y":"1787"},{"x":"2022-7-20 7:45","y":"1789"},{"x":"2022-7-20 7:50","y":"1784"},{"x":"2022-7-20 7:55","y":"1780"},{"x":"2022-7-20 11:00","y":"1795"},{"x":"2022-7-20 11:50","y":"1792"},{"x":"2022-7-20 11:10","y":"1794"},{"x":"2022-7-20 11:15","y":"1793"},{"x":"2022-7-20 11:20","y":"1790"},{"x":"2022-7-20 11:25","y":"1790"},{"x":"2022-7-21 7:30","y":"1796"},{"x":"2022-7-21 7:35","y":"1794"},{"x":"2022-7-21 7:40","y":"1793"},{"x":"2022-7-21 7:45","y":"1794"},{"x":"2022-7-21 11:00","y":"1785"},{"x":"2022-7-21 11:50","y":"1787"},{"x":"2022-7-21 11:10","y":"1788"},{"x":"2022-7-21 11:15","y":"1792"},{"x":"2022-7-22 7:30","y":"1829"},{"x":"2022-7-22 7:35","y":"1823"},{"x":"2022-7-22 7:40","y":"1830"},{"x":"2022-7-22 7:45","y":"1820"},{"x":"2022-7-22 11:00","y":"1950"},{"x":"2022-7-22 11:50","y":"1950"},{"x":"2022-7-22 11:10","y":"1951"},{"x":"2022-7-22 11:15","y":"1941"},{"x":"2022-7-23 7:30","y":"1956"},{"x":"2022-7-23 7:35","y":"1956"},{"x":"2022-7-23 7:40","y":"1956"},{"x":"2022-7-23 7:45","y":"1956"},{"x":"2022-7-23 11:00","y":"1956"},{"x":"2022-7-23 11:50","y":"1956"},{"x":"2022-7-23 11:10","y":"1956"},{"x":"2022-7-23 11:15","y":"1956"},{"x":"2022-7-24 7:35","y":"1956"},{"x":"2022-7-24 7:40","y":"1956"},{"x":"2022-7-24 7:45","y":"1956"},{"x":"2022-7-24 11:00","y":"1956"},{"x":"2022-7-24 11:50","y":"1956"},{"x":"2022-7-24 11:10","y":"1956"},{"x":"2022-7-24 11:15","y":"1956"},{"x":"2022-7-25 7:30","y":"1940"},{"x":"2022-7-25 7:35","y":"1937"},{"x":"2022-7-25 7:40","y":"1942"},{"x":"2022-7-25 7:45","y":"1933"},{"x":"2022-7-25 11:00","y":"1928"},{"x":"2022-7-25 11:50","y":"1928"},{"x":"2022-7-25 11:10","y":"1928"},{"x":"2022-7-25 11:15","y":"1930"},{"x":"2022-7-26 7:30","y":"1912"},{"x":"2022-7-26 7:35","y":"1914"},{"x":"2022-7-26 7:40","y":"1914"},{"x":"2022-7-26 7:45","y":"1905"},{"x":"2022-7-26 11:00","y":"1922"},{"x":"2022-7-26 11:50","y":"1928"},{"x":"2022-7-26 11:10","y":"1928"},{"x":"2022-7-26 11:15","y":"1931"},{"x":"2022-7-27 7:30","y":"1954"},{"x":"2022-7-27 7:35","y":"1953"},{"x":"2022-7-27 7:40","y":"1960"},{"x":"2022-7-27 7:45","y":"1957"}]
    },
  ]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
};

export default PalladiumChart;
