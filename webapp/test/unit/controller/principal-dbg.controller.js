/*global QUnit*/

sap.ui.define([
	"AR_DP_REP_PROXAFACT_RASA/AR_DP_REP_PROXAFACT_RASA/controller/principal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("principal Controller");

	QUnit.test("I should test the principal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});