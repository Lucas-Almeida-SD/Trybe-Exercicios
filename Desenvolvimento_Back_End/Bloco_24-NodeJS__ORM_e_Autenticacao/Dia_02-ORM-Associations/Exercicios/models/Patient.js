const Patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patientId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: DataTypes.STRING,
    planId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    underscored: true,
    tableName: 'Patients',
    timestamps: false,
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan,
      { foreignKey:  'planId', as: 'plan'});
  }

  return Patient;
};

module.exports = Patient;
