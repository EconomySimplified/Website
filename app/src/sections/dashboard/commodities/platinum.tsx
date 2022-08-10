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

const PlatinumChart = () => {
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
      name: 'Platinum Price',
      data: [{"x":"2022-7-11 19:00","y":"840.31"},{"x":"2022-7-13 16:52","y":"855.85"},{"x":"2022-7-14 16:19","y":"843.62"},{"x":"2022-7-14 17:16","y":"842.53"},{"x":"2022-7-14 17:17","y":"842.53"},{"x":"2022-7-15 3:30","y":"834.87"},{"x":"2022-7-15 7:00","y":"837.63"},{"x":"2022-7-16 3:30","y":"851"},{"x":"2022-7-16 7:00","y":"851"},{"x":"2022-7-17 3:30","y":"851"},{"x":"2022-7-17 7:00","y":"851"},{"x":"2022-7-18 3:30","y":"863.31"},{"x":"2022-7-18 7:00","y":"860.21"},{"x":"2022-7-19 3:30","y":"869.37"},{"x":"2022-7-19 7:00","y":"881.81"},{"x":"2022-7-19 14:32","y":"873"},{"x":"2022-7-19 15:31","y":"874"},{"x":"2022-7-19 15:42","y":"876"},{"x":"2022-7-20 7:30","y":"870"},{"x":"2022-7-20 7:35","y":"871"},{"x":"2022-7-20 7:40","y":"868"},{"x":"2022-7-20 7:45","y":"866"},{"x":"2022-7-20 7:50","y":"866"},{"x":"2022-7-20 7:55","y":"866"},{"x":"2022-7-20 11:00","y":"861"},{"x":"2022-7-20 11:50","y":"861"},{"x":"2022-7-20 11:10","y":"863"},{"x":"2022-7-20 11:15","y":"862"},{"x":"2022-7-20 11:20","y":"861"},{"x":"2022-7-20 11:25","y":"860"},{"x":"2022-7-21 7:30","y":"850"},{"x":"2022-7-21 7:35","y":"854"},{"x":"2022-7-21 7:40","y":"856"},{"x":"2022-7-21 7:45","y":"860"},{"x":"2022-7-21 11:00","y":"874"},{"x":"2022-7-21 11:50","y":"873"},{"x":"2022-7-21 11:10","y":"875"},{"x":"2022-7-21 11:15","y":"875"},{"x":"2022-7-22 7:30","y":"884"},{"x":"2022-7-22 7:35","y":"883"},{"x":"2022-7-22 7:40","y":"883"},{"x":"2022-7-22 7:45","y":"882"},{"x":"2022-7-22 11:00","y":"880"},{"x":"2022-7-22 11:50","y":"880"},{"x":"2022-7-22 11:10","y":"880"},{"x":"2022-7-22 11:15","y":"880"},{"x":"2022-7-23 7:30","y":"873"},{"x":"2022-7-23 7:35","y":"873"},{"x":"2022-7-23 7:40","y":"873"},{"x":"2022-7-23 7:45","y":"873"},{"x":"2022-7-23 11:00","y":"873"},{"x":"2022-7-23 11:50","y":"873"},{"x":"2022-7-23 11:10","y":"873"},{"x":"2022-7-23 11:15","y":"873"},{"x":"2022-7-24 7:35","y":"873"},{"x":"2022-7-24 7:40","y":"873"},{"x":"2022-7-24 7:45","y":"873"},{"x":"2022-7-24 11:00","y":"873"},{"x":"2022-7-24 11:50","y":"873"},{"x":"2022-7-24 11:10","y":"873"},{"x":"2022-7-24 11:15","y":"873"},{"x":"2022-7-25 7:30","y":"884"},{"x":"2022-7-25 7:35","y":"884"},{"x":"2022-7-25 7:40","y":"884"},{"x":"2022-7-25 7:45","y":"883"},{"x":"2022-7-25 11:00","y":"875"},{"x":"2022-7-25 11:50","y":"875"},{"x":"2022-7-25 11:10","y":"878"},{"x":"2022-7-25 11:15","y":"877"},{"x":"2022-7-26 7:30","y":"877"},{"x":"2022-7-26 7:35","y":"877"},{"x":"2022-7-26 7:40","y":"877"},{"x":"2022-7-26 7:45","y":"878"},{"x":"2022-7-26 11:00","y":"869"},{"x":"2022-7-26 11:50","y":"870"},{"x":"2022-7-26 11:10","y":"871"},{"x":"2022-7-26 11:15","y":"871"},{"x":"2022-7-27 7:30","y":"882"},{"x":"2022-7-27 7:35","y":"879"},{"x":"2022-7-27 7:40","y":"882"},{"x":"2022-7-27 7:45","y":"881"}]
    },
  ]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
};

export default PlatinumChart;
