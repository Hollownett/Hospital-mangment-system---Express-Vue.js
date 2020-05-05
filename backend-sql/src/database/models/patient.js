const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const patient = sequelize.define(
    'patient',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      isbn: {
        type: DataTypes.STRING(13),
        allowNull: false,
        validate: {
          len: [0, 50],
          notEmpty: true,
        }
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      author: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          "available",
          "unavailable"
        ],
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
      birthDate: {
         type: DataTypes.DATE,
         allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );

  patient.associate = (models) => {


    models.patient.hasMany(models.file, {
      as: 'images',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.patient.getTableName(),
        belongsToColumn: 'images',
      },
    });

    models.patient.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.patient.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return patient;
};
