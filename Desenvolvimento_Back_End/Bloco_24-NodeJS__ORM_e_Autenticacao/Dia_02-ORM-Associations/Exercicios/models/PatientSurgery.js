const PatientSurgery = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery', {
    patientId: { type: DataTypes.INTEGER, primaryKey: true },
    surgeryId: { type: DataTypes.INTEGER, primaryKey: true },
  },
  {
    underscored: true,
    tableName: 'Patient_surgeries',
    timestamps: false,
  });

  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patientId',
      otherKey: 'surgeryId'
    });

    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgeryId',
      otherKey: 'patientId',
    });
  }

  return PatientSurgery;
}

module.exports = PatientSurgery;
