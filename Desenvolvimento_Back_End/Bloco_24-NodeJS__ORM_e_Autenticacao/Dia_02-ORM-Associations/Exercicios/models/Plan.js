const Plan = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    planId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
  {
    underscored: true,
    tableName: 'Plans',
    timestamps: false,
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient,
      { foreignKey:  'planId', as: 'patients' });
  }

  return Plan;
};

module.exports = Plan;
