import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    // Chamando a class Model com o usper
    super.init(
      // não referencia os ID's porque ele é gerado automaticamente quando faz o relacionamento entre models
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
