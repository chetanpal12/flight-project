'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Airports',{
      type: 'foreign key',
      name:'city_fkey_constraint',
      fields:['cityId'],
      references:{
        table:'Cities',           //when we are adding the contraint in the seperate then we use the table and field
                                 //  and when we adding in the same then we use model and key     
        field:'id'
      },
      onDelete:'CASCADE'
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Airports','city_fkey_constraint');
  }
};
