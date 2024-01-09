import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BmiChart = () => {
  const [bmi, setBmi] = useState(null);

  useEffect(() => {

    const randomBmi = Math.random() * (30 - 15) + 15;
    setBmi(randomBmi.toFixed(2));
  }, []);

  const getBmiCategory = () => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal Weight';
    } else {
      return 'Overweight';
    }
  };

  const options = {
    chart: {
      type: 'radialBar',
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: '70%',
        },
        dataLabels: {
          showOn: 'always',
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '15px',
          },
          value: {
            color: '#111',
            fontSize: '25px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    labels: [getBmiCategory()],
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">BMI Chart</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {bmi && (
            <div className="mt-4">
              <h3>Your BMI:</h3>
              <p>{bmi}</p>
              <ReactApexChart
                options={options}
                series={[Math.round(bmi)]}
                type="radialBar"
                height={250}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BmiChart;
