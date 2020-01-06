'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with announcements
 */

const Announcement = use('App/Models/Announcement')

class AnnouncementController {
  /**
   * Show a list of all announcements.
   * GET announcements
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try {
      const announcements = await Announcement.all()

      return response.status(200).json(announcements)
    } catch (error) {
      return response.status(404).json(error.message)
    }
  }

  /**
   * Render a form to be used for creating a new announcement.
   * GET announcements/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new announcement.
   * POST announcements
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    try {
      const announcement = await Announcement.create({
        title: request.input('title'),
        message:request.input('message'),
        color:request.input('color')
      })

      return response.status(200).json(announcement)
    } catch (error) {
      return response.status(404).json(error.message)
    }
  }

  /**
   * Display a single announcement.
   * GET announcements/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing announcement.
   * GET announcements/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update announcement details.
   * PUT or PATCH announcements/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a announcement with id.
   * DELETE announcements/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AnnouncementController
