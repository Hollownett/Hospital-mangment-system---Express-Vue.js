const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const medBooks = sequelize.define(
    'medBooks',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      issueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      returnDate: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          "Cure",
          "closed"
        ],
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
      desiase: {
        type: DataTypes.STRING(255),
      },
      recipe: {
        type: DataTypes.STRING(255),
      },
      fee: {
        type: DataTypes.INTEGER,
      },
    },
   
    {
      timestamps: true,
      paranoid: true,
    },
  );

  medBooks.associate = (models) => {
    models.medBooks.belongsTo(models.patient, {
      as: 'patient',
      constraints: false,
    });

    models.medBooks.belongsTo(models.user, {
      as: 'member',
      constraints: false,
    });



    models.medBooks.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.medBooks.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return medBooks;
};
