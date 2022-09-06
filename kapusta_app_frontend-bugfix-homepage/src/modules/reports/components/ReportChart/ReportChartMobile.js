import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  ResponsiveContainer,
  LabelList,
  YAxis,
} from 'recharts';

import styles from './ReportChart.module.css';

const ReportChartMobile = ({ data }) => {
  const renderBarLabel = ({ x, y, width, value }) => (
    <text x={250} y={y} textAnchor="middle" fontSize={10} dy={-10}>
      {value ? `${value} грн` : ''}
    </text>
  );

  const renderCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );

  return (
    <ResponsiveContainer
      width="100%"
      height={50 * data.length}
      className={styles.chartMobileWrapper}
    >
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        barGap="15"
      >
        <XAxis hide axisLine={false} type="number" />
        <YAxis dataKey="transactionDescription" type="category" hide />
        <Bar
          dataKey="TotalSum"
          barSize={15}
          radius={[0, 10, 10, 0]}
          label={renderBarLabel}
          fill="#52555f"
          minPointSize={5}
        >
          {data.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
          <LabelList
            dataKey="transactionDescription"
            content={renderCategoryLabel}
            fill="#52555F"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReportChartMobile;
