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

const SoybeanChart = () => {
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
      name: 'Soybean Price',
      data: [{"x":"2022-7-11 19:00","y":"15.93"},{"x":"2022-7-13 16:52","y":"15.99"},{"x":"2022-7-14 16:19","y":"16.09"},{"x":"2022-7-14 17:16","y":"16.09"},{"x":"2022-7-14 17:17","y":"16.09"},{"x":"2022-7-15 3:30","y":"14.66"},{"x":"2022-7-15 7:00","y":"14.78"},{"x":"2022-7-16 3:30","y":"14.7"},{"x":"2022-7-16 7:00","y":"14.7"},{"x":"2022-7-17 3:30","y":"14.7"},{"x":"2022-7-17 7:00","y":"14.7"},{"x":"2022-7-18 3:30","y":"14.88"},{"x":"2022-7-18 7:00","y":"14.88"},{"x":"2022-7-19 3:30","y":"14.88"},{"x":"2022-7-19 7:00","y":"14.8"},{"x":"2022-7-19 14:32","y":"14.79"},{"x":"2022-7-19 15:31","y":"14.79"},{"x":"2022-7-19 15:42","y":"14.79"},{"x":"2022-7-20 7:30","y":"14.67"},{"x":"2022-7-20 7:35","y":"14.66"},{"x":"2022-7-20 7:40","y":"14.63"},{"x":"2022-7-20 7:45","y":"14.62"},{"x":"2022-7-20 7:50","y":"14.64"},{"x":"2022-7-20 7:55","y":"14.63"},{"x":"2022-7-20 11:00","y":"14.5"},{"x":"2022-7-20 11:50","y":"14.51"},{"x":"2022-7-20 11:10","y":"14.52"},{"x":"2022-7-20 11:15","y":"14.52"},{"x":"2022-7-20 11:20","y":"14.54"},{"x":"2022-7-20 11:25","y":"14.54"},{"x":"2022-7-21 7:30","y":"14.31"},{"x":"2022-7-21 7:35","y":"14.3"},{"x":"2022-7-21 7:40","y":"14.3"},{"x":"2022-7-21 7:45","y":"14.3"},{"x":"2022-7-21 11:00","y":"14.29"},{"x":"2022-7-21 11:50","y":"14.29"},{"x":"2022-7-21 11:10","y":"14.3"},{"x":"2022-7-21 11:15","y":"14.29"},{"x":"2022-7-22 7:30","y":"14.19"},{"x":"2022-7-22 7:35","y":"14.21"},{"x":"2022-7-22 7:40","y":"14.22"},{"x":"2022-7-22 7:45","y":"14.22"},{"x":"2022-7-22 11:00","y":"14.3"},{"x":"2022-7-22 11:50","y":"14.3"},{"x":"2022-7-22 11:10","y":"14.3"},{"x":"2022-7-22 11:15","y":"14.32"},{"x":"2022-7-23 7:30","y":"14.33"},{"x":"2022-7-23 7:35","y":"14.33"},{"x":"2022-7-23 7:40","y":"14.33"},{"x":"2022-7-23 7:45","y":"14.33"},{"x":"2022-7-23 11:00","y":"14.33"},{"x":"2022-7-23 11:50","y":"14.33"},{"x":"2022-7-23 11:10","y":"14.33"},{"x":"2022-7-23 11:15","y":"14.33"},{"x":"2022-7-24 7:35","y":"14.33"},{"x":"2022-7-24 7:40","y":"14.33"},{"x":"2022-7-24 7:45","y":"14.33"},{"x":"2022-7-24 11:00","y":"14.33"},{"x":"2022-7-24 11:50","y":"14.33"},{"x":"2022-7-24 11:10","y":"14.33"},{"x":"2022-7-24 11:15","y":"14.33"},{"x":"2022-7-25 7:30","y":"14.49"},{"x":"2022-7-25 7:35","y":"14.48"},{"x":"2022-7-25 7:40","y":"14.51"},{"x":"2022-7-25 7:45","y":"14.51"},{"x":"2022-7-25 11:00","y":"14.65"},{"x":"2022-7-25 11:50","y":"14.63"},{"x":"2022-7-25 11:10","y":"14.63"},{"x":"2022-7-25 11:15","y":"14.63"},{"x":"2022-7-26 7:30","y":"14.95"},{"x":"2022-7-26 7:35","y":"14.95"},{"x":"2022-7-26 7:40","y":"14.95"},{"x":"2022-7-26 7:45","y":"15.01"},{"x":"2022-7-26 11:00","y":"15.05"},{"x":"2022-7-26 11:50","y":"15.05"},{"x":"2022-7-26 11:10","y":"15.03"},{"x":"2022-7-26 11:15","y":"15.04"},{"x":"2022-7-27 7:30","y":"15.59"},{"x":"2022-7-27 7:35","y":"15.62"},{"x":"2022-7-27 7:40","y":"15.65"},{"x":"2022-7-27 7:45","y":"15.65"}]
    },
  ]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
};

export default SoybeanChart;
