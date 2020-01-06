'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnnouncementSchema extends Schema {
  up () {
    this.create('announcements', (table) => {
      table.increments()
      table.string('title')
      table.string('message')
      table.string('color')
      table.timestamps()
    })
  }

  down () {
    this.drop('announcements')
  }
}

module.exports = AnnouncementSchema
