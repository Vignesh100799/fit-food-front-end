import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Side from './Side';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };

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
    <Side>
    <div className="container mt-5">
      <h2 className="text-center">BMI Calculator</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Height (cm):</label>
              <input
                type="number"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Weight (kg):</label>
              <input
                type="number"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>
          </form>
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
    </Side>
  );
};

export default BmiCalculator;
