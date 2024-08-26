# Copyright (c) 2024, Frappe and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class MembershipPlan(Document):
	
	pass

@frappe.whitelist(allow_guest=True)
def get_membership_plan():
	mem_plans = frappe.get_all(
		"Membership Plan",
		filters={},
		fields=["plan_name", "duration", "cost"],
	)
	return mem_plans
