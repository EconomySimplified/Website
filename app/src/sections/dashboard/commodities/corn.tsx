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

const CornChart = () => {
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
      name: 'Corn Price',
      data: [{"x":"2022-7-11 19:00","y":"7.33"},{"x":"2022-7-13 16:52","y":"7.4"},{"x":"2022-7-14 16:19","y":"6.94"},{"x":"2022-7-14 17:16","y":"6.94"},{"x":"2022-7-14 17:17","y":"6.94"},{"x":"2022-7-15 3:30","y":"6.05"},{"x":"2022-7-15 7:00","y":"6.07"},{"x":"2022-7-16 3:30","y":"6.06"},{"x":"2022-7-16 7:00","y":"6.06"},{"x":"2022-7-17 3:30","y":"6.06"},{"x":"2022-7-17 7:00","y":"6.06"},{"x":"2022-7-18 3:30","y":"6.14"},{"x":"2022-7-18 7:00","y":"6.13"},{"x":"2022-7-19 3:30","y":"6.05"},{"x":"2022-7-19 7:00","y":"5.97"},{"x":"2022-7-19 14:32","y":"5.97"},{"x":"2022-7-19 15:31","y":"5.97"},{"x":"2022-7-19 15:42","y":"5.97"},{"x":"2022-7-20 7:30","y":"5.97"},{"x":"2022-7-20 7:35","y":"5.95"},{"x":"2022-7-20 7:40","y":"5.96"},{"x":"2022-7-20 7:45","y":"5.95"},{"x":"2022-7-20 7:50","y":"5.95"},{"x":"2022-7-20 7:55","y":"5.95"},{"x":"2022-7-20 11:00","y":"5.92"},{"x":"2022-7-20 11:50","y":"5.92"},{"x":"2022-7-20 11:10","y":"5.92"},{"x":"2022-7-20 11:15","y":"5.94"},{"x":"2022-7-20 11:20","y":"5.94"},{"x":"2022-7-20 11:25","y":"5.96"},{"x":"2022-7-21 7:30","y":"5.78"},{"x":"2022-7-21 7:35","y":"5.79"},{"x":"2022-7-21 7:40","y":"5.79"},{"x":"2022-7-21 7:45","y":"5.8"},{"x":"2022-7-21 11:00","y":"5.84"},{"x":"2022-7-21 11:50","y":"5.85"},{"x":"2022-7-21 11:10","y":"5.85"},{"x":"2022-7-21 11:15","y":"5.86"},{"x":"2022-7-22 7:30","y":"5.71"},{"x":"2022-7-22 7:35","y":"5.72"},{"x":"2022-7-22 7:40","y":"5.71"},{"x":"2022-7-22 7:45","y":"5.71"},{"x":"2022-7-22 11:00","y":"5.71"},{"x":"2022-7-22 11:50","y":"5.72"},{"x":"2022-7-22 11:10","y":"5.73"},{"x":"2022-7-22 11:15","y":"5.72"},{"x":"2022-7-23 7:30","y":"5.62"},{"x":"2022-7-23 7:35","y":"5.62"},{"x":"2022-7-23 7:40","y":"5.62"},{"x":"2022-7-23 7:45","y":"5.62"},{"x":"2022-7-23 11:00","y":"5.62"},{"x":"2022-7-23 11:50","y":"5.62"},{"x":"2022-7-23 11:10","y":"5.62"},{"x":"2022-7-23 11:15","y":"5.62"},{"x":"2022-7-24 7:35","y":"5.62"},{"x":"2022-7-24 7:40","y":"5.62"},{"x":"2022-7-24 7:45","y":"5.62"},{"x":"2022-7-24 11:00","y":"5.62"},{"x":"2022-7-24 11:50","y":"5.62"},{"x":"2022-7-24 11:10","y":"5.62"},{"x":"2022-7-24 11:15","y":"5.64"},{"x":"2022-7-25 7:30","y":"5.77"},{"x":"2022-7-25 7:35","y":"5.79"},{"x":"2022-7-25 7:40","y":"5.78"},{"x":"2022-7-25 7:45","y":"5.79"},{"x":"2022-7-25 11:00","y":"5.74"},{"x":"2022-7-25 11:50","y":"5.74"},{"x":"2022-7-25 11:10","y":"5.74"},{"x":"2022-7-25 11:15","y":"5.73"},{"x":"2022-7-26 7:30","y":"5.95"},{"x":"2022-7-26 7:35","y":"5.96"},{"x":"2022-7-26 7:40","y":"5.96"},{"x":"2022-7-26 7:45","y":"5.95"},{"x":"2022-7-26 11:00","y":"5.88"},{"x":"2022-7-26 11:50","y":"5.88"},{"x":"2022-7-26 11:10","y":"5.91"},{"x":"2022-7-26 11:15","y":"5.94"},{"x":"2022-7-27 7:30","y":"6.01"},{"x":"2022-7-27 7:35","y":"6.02"},{"x":"2022-7-27 7:40","y":"6"},{"x":"2022-7-27 7:45","y":"5.99"}]
    },
  ]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
};

export default CornChart;
