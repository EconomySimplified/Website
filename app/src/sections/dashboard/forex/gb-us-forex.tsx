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

const GBForexRateChart = () => {
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
            opacityTo: 1
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
          return `${val}`;
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
      name: 'British Pound/US Dollar',
      data: [{"x":"2022-6-30","y":"0.83"},{"x":"2022-7-2","y":"0.83"},{"x":"2022-7-5","y":"0.84"},{"x":"2022-7-7","y":"0.83"},{"x":"2022-7-10","y":"0.84"},{"x":"2022-7-11","y":"0.84"},{"x":"2022-7-13","y":"0.85"},{"x":"2022-7-14","y":"0.85"},{"x":"2022-7-15","y":"0.84"},{"x":"2022-7-16","y":"0.84"},{"x":"2022-7-17","y":"0.84"},{"x":"2022-7-18","y":"0.83"},{"x":"2022-7-19","y":"0.83"},{"x":"2022-7-20","y":"0.84"},{"x":"2022-7-21","y":"0.83"},{"x":"2022-7-22","y":"0.83"},{"x":"2022-7-23","y":"0.83"},{"x":"2022-7-24","y":"0.83"},{"x":"2022-7-25","y":"0.83"},{"x":"2022-7-26","y":"0.83"},{"x":"2022-7-27","y":"0.82"},{"x":"2022-7-28","y":"0.82"},{"x":"2022-7-29","y":"0.82"},{"x":"2022-7-30","y":"0.82"},{"x":"2022-7-31","y":"0.81"},{"x":"2022-8-1","y":"0.82"},{"x":"2022-8-2","y":"0.82"},{"x":"2022-8-3","y":"0.82"},{"x":"2022-8-4","y":"0.83"},{"x":"2022-8-5","y":"0.83"},{"x":"2022-8-6","y":"0.83"},{"x":"2022-8-7","y":"0.83"},{"x":"2022-8-8","y":"0.83"}]
    }
  ]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
};

export default GBForexRateChart;
