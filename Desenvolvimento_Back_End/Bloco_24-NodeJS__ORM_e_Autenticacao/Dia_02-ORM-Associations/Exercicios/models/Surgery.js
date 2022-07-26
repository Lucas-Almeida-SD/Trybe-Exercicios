const Surgery = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgeryId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'Surgeries',
    timestamps: false,
  });

  return Surgery;
};

module.exports = Surgery;
