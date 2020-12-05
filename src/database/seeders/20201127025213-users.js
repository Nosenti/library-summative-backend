'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [{
      first_name : 'John',
      last_name : 'Kay',
      email : 'admin1@alueducation.com',
      role: 'super_admin',
      password:'$2a$10$iyFH3/jgULgC0sMJ/VST1uR/.GKnx5IGtVIPsbhpsoz.pxe2yWnL6',
      createdAt : new Date(),
      updatedAt : new Date()
    },
  {
      first_name : 'John',
      last_name : 'Matabaro',
      email : 'admin2@alueducation.com',
      role: 'super_admin',
      password:'$2a$10$iyFH3/jgULgC0sMJ/VST1uR/.GKnx5IGtVIPsbhpsoz.pxe2yWnL6',
      createdAt : new Date(),
      updatedAt : new Date()
    },
  {
      first_name : 'Nayinzira',
      last_name : 'Avatar',
      email : 'librarian1@alueducation.com',
      role: 'librarian',
      password:'$2a$10$iyFH3/jgULgC0sMJ/VST1uR/.GKnx5IGtVIPsbhpsoz.pxe2yWnL6',
      createdAt : new Date(),
      updatedAt : new Date()
    },
  {
      first_name : 'Kevin',
      last_name : 'Kay',
      email : 'librarian2@alueducation.com',
      role: 'librarian',
      password:'$2a$10$iyFH3/jgULgC0sMJ/VST1uR/.GKnx5IGtVIPsbhpsoz.pxe2yWnL6',
      createdAt : new Date(),
      updatedAt : new Date()
    },
  {
      first_name : 'Kevin',
      last_name : 'Rugamba',
      email : 'facilitator1@alueducation.com',
      role: 'facilitator',
      password:'$2a$10$iyFH3/jgULgC0sMJ/VST1uR/.GKnx5IGtVIPsbhpsoz.pxe2yWnL6',
      createdAt : new Date(),
      updatedAt : new Date()
    },
  {
      first_name : 'Kevin',
      last_name : 'Kay',
      email : 'facilitator2@alueducation.com',
      role: 'facilitator',
      password:'$2a$10$iyFH3/jgULgC0sMJ/VST1uR/.GKnx5IGtVIPsbhpsoz.pxe2yWnL6',
      createdAt : new Date(),
      updatedAt : new Date()
    },
  {
      first_name : 'Kevin',
      last_name : 'Kayisire',
      email : 'student1@alueducation.com',
      role: 'student',
      password:'$2a$10$iyFH3/jgULgC0sMJ/VST1uR/.GKnx5IGtVIPsbhpsoz.pxe2yWnL6',
      createdAt : new Date(),
      updatedAt : new Date()
    },
  {
      first_name : 'Kevin',
      last_name : 'Kay',
      email : 'student2@alueducation.com',
      role: 'student',
      password:'$2a$10$iyFH3/jgULgC0sMJ/VST1uR/.GKnx5IGtVIPsbhpsoz.pxe2yWnL6',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
