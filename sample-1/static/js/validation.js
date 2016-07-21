
var field = {

	regex : {
		email : /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
		, internationalPhone : /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
		, len1 : /^.{1}$/
		, len2 : /^.{2}$/
		, len3 : /^.{3}$/
		, len4 : /^.{4}$/
		, len5 : /^.{5}$/
		, len6 : /^.{6}$/
		, len7 : /^.{7}$/
		, len8 : /^.{8}$/
		, len9 : /^.{9}$/
		, len10 : /^.{10}$/
		, len11 : /^.{11}$/
		, len12 : /^.{12}$/
		, max1 : /^.{0,1}$/
		, max2 : /^.{0,2}$/
		, max3 : /^.{0,3}$/
		, max4 : /^.{0,4}$/
		, max5 : /^.{0,5}$/
		, max6 : /^.{0,6}$/
		, max7 : /^.{0,7}$/
		, max8 : /^.{0,8}$/
		, max9 : /^.{0,9}$/
		, max10 : /^.{0,10}$/
		, max11 : /^.{0,11}$/
		, max12 : /^.{0,12}$/
		, max20 : /^.{0,20}$/
		, max30 : /^.{0,30}$/
		, max50 : /^.{0,50}$/
		, max80 : /^.{0,80}$/
		, max100 : /^.{0,100}$/
		, max120 : /^.{0,120}$/
		, max250 : /^.{0,250}$/
		, max500 : /^.{0,500}$/
		, max1000 : /^.{0,1000}$/
		, min1 : /^.{1,}$/
		, min2 : /^.{2,}$/
		, min3 : /^.{3,}$/
		, min4 : /^.{4,}$/
		, min5 : /^.{5,}$/
		, min6 : /^.{6,}$/
		, min7 : /^.{7,}$/
		, min8 : /^.{8,}$/
		, min9 : /^.{9,}$/
		, min10 : /^.{10,}$/
		, min11 : /^.{11,}$/
		, min12 : /^.{12,}$/
		, min20 : /^.{20,}$/
		, min30 : /^.{30,}$/
		, min50 : /^.{50,}$/
		, min80 : /^.{80,}$/
		, min100 : /^.{100,}$/
		, min120 : /^.{120,}$/
		, min250 : /^.{250,}$/
		, min500 : /^.{500,}$/
		, min1000 : /^.{1000,}$/
		, usPhone : /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/i
	}

	, mandatory : (function (control) {

		//var control = document.getElementById(cN);
		var requiredMsg = control.getAttribute("required-message");

		if (control.value.length > 0) {
			return { pass : true, errorMessage: null };
		} else {
			return { pass : false, errorMessage : requiredMsg };
		}
	})

	, format : (function (template, value) {

		var isValid = true;

		switch (template) {
			case "email":
				isValid = field.regex.email.test(value);
				break;
			case "internationalPhone":
				isValid = field.regex.internationalPhone.test(value);
				break;
			case "len1":
				isValid = field.regex.len1.test(value);
				break;
			case "len2":
				isValid = field.regex.len2.test(value);
				break;
			case "len3":
				isValid = field.regex.len3.test(value);
				break;
			case "len4":
				isValid = field.regex.len4.test(value);
				break;
			case "len5":
				isValid = field.regex.len5.test(value);
				break;
			case "len6":
				isValid = field.regex.len6.test(value);
				break;
			case "len7":
				isValid = field.regex.len7.test(value);
				break;
			case "len8":
				isValid = field.regex.len8.test(value);
				break;
			case "len9":
				isValid = field.regex.len9.test(value);
				break;
			case "len10":
				isValid = field.regex.len10.test(value);
				break;
			case "len11":
				isValid = field.regex.len11.test(value);
				break;
			case "len12":
				isValid = field.regex.len12.test(value);
				break;
			case "max1":
				isValid = field.regex.max1.test(value);
				break;
			case "max2":
				isValid = field.regex.max2.test(value);
				break;
			case "max3":
				isValid = field.regex.max3.test(value);
				break;
			case "max4":
				isValid = field.regex.max4.test(value);
				break;
			case "max5":
				isValid = field.regex.max5.test(value);
				break;
			case "max6":
				isValid = field.regex.max6.test(value);
				break;
			case "max7":
				isValid = field.regex.max7.test(value);
				break;
			case "max8":
				isValid = field.regex.max8.test(value);
				break;
			case "max9":
				isValid = field.regex.max9.test(value);
				break;
			case "max10":
				isValid = field.regex.max10.test(value);
				break;
			case "max11":
				isValid = field.regex.max11.test(value);
				break;
			case "max12":
				isValid = field.regex.max12.test(value);
				break;
			case "max20":
				isValid = field.regex.max20.test(value);
				break;
			case "max30":
				isValid = field.regex.max30.test(value);
				break;
			case "max50":
				isValid = field.regex.max50.test(value);
				break;
			case "max80":
				isValid = field.regex.max80.test(value);
				break;
			case "max100":
				isValid = field.regex.max100.test(value);
				break;
			case "max120":
				isValid = field.regex.max120.test(value);
				break;
			case "max250":
				isValid = field.regex.max250.test(value);
				break;
			case "max500":
				isValid = field.regex.max500.test(value);
				break;
			case "max1000":
				isValid = field.regex.max1000.test(value);
				break;
			case "min1":
				isValid = field.regex.min1.test(value);
				break;
			case "min2":
				isValid = field.regex.min2.test(value);
				break;
			case "min3":
				isValid = field.regex.min3.test(value);
				break;
			case "min4":
				isValid = field.regex.min4.test(value);
				break;
			case "min5":
				isValid = field.regex.min5.test(value);
				break;
			case "min6":
				isValid = field.regex.min6.test(value);
				break;
			case "min7":
				isValid = field.regex.min7.test(value);
				break;
			case "min8":
				isValid = field.regex.min8.test(value);
				break;
			case "min9":
				isValid = field.regex.min9.test(value);
				break;
			case "min10":
				isValid = field.regex.min10.test(value);
				break;
			case "min11":
				isValid = field.regex.min11.test(value);
				break;
			case "min12":
				isValid = field.regex.min12.test(value);
				break;
			case "min20":
				isValid = field.regex.min20.test(value);
				break;
			case "min30":
				isValid = field.regex.min30.test(value);
				break;
			case "min50":
				isValid = field.regex.min50.test(value);
				break;
			case "min80":
				isValid = field.regex.min80.test(value);
				break;
			case "min100":
				isValid = field.regex.min100.test(value);
				break;
			case "min120":
				isValid = field.regex.min120.test(value);
				break;
			case "min250":
				isValid = field.regex.min250.test(value);
				break;
			case "min500":
				isValid = field.regex.min500.test(value);
				break;
			case "min1000":
				isValid = field.regex.min1000.test(value);
				break;
			case "usPhone":
				isValid = field.regex.usPhone.test(value);
				break;
		}

		return isValid;
	})

	, hideErrorControl : (function (errorControl) {

		errorControl.style.display = "none";
		errorControl.style.borderColor = "";
	})

	, showErrorControl : (function (errorControl, msg) {
		
		errorControl.innerHTML = msg;
		errorControl.style.display = "block";
		errorControl.style.borderColor = "#B8120B";
	})

	, removeBorderHighlight : (function (control) {

		control.style.borderColor = "";

	})

	, showBorderHighlight : (function (control) {

		control.style.borderColor = "#B8120B";

	})

	, addAttribute : (function (control, attributeName, attributeValue, tokenizer, canRepeat) {

		if (control.hasAttribute(attributeName)) {

			var attributeItems = control.getAttribute(attributeName);
			var foundDuplicateAttributeValue = false;

			attributeItems.split(tokenizer).forEach(function(attributeItem) {

				if (attributeItem == attributeValue) {
					foundDuplicateAttributeValue = true;
					return;
				}
			});

			if (!foundDuplicateAttributeValue || (foundDuplicateAttributeValue && canRepeat)) {
				attributeItems = attributeItems + (attributeItems.length == 0 ? attributeValue : tokenizer + attributeValue);
				control.setAttribute(attributeName, attributeItems);
			}
			
		} else {

			control.setAttribute(attributeName, attributeValue);
		}
	})

	, addCss : (function (control, cssName) {

		field.addAttribute(control, "class", cssName, " ", false);
	})

	, validate : (function (errorItem, controlFoundError) {

		var control = document.getElementById(errorItem.controlId);
		var errorControl = document.getElementById(errorItem.errorControlId);
		errorItem.pass = field.format(errorItem.template, control.value);

		if (errorItem.pass) {

			field.hideErrorControl(errorControl);

			if(!controlFoundError) {
				field.removeBorderHighlight(control);
			}

		} else {

			field.addCss(errorControl, "validation-error");
			field.showErrorControl(errorControl, errorItem.errorMessage);
			field.showBorderHighlight(control);
		}

		return errorItem.pass;
	})

	, hideErrorSummaryItem : (function (errorSummaryControlId, errorControlId) {

		var errorSummaryControl = document.getElementById(errorSummaryControlId);

		if (errorSummaryControl != null) {

			var errorItemFound = false;
			var errorSummaryItems = errorSummaryControl.getElementsByTagName("div");

			for (var i=0; i<errorSummaryItems.length; i++) {

				if (errorSummaryItems[i].getAttribute("name") == errorControlId) {
					errorSummaryItems[i].style.display = "none";
				}

				if (errorSummaryItems[i].style.display != "none") {
					errorItemFound = true;
				}
			}

			if (errorItemFound) {
				errorSummaryControl.style.display = "block";
			} else {
				errorSummaryControl.style.display = "none";
			}
		}

		return false;
	})

	, showErrorSummaryItem : (function (errorSummaryControlId, errorControlId) {

		var errorSummaryControl = document.getElementById(errorSummaryControlId);

		if (errorSummaryControl != null) {

			var errorItemFound = false;
			var errorSummaryItems = errorSummaryControl.getElementsByTagName("div");

			for (var i=0; i<errorSummaryItems.length; i++) {

				if (errorSummaryItems[i].getAttribute("name") == errorControlId) {
					errorSummaryItems[i].style.display = "block";
				}

				if (errorSummaryItems[i].style.display != "none") {
					errorItemFound = true;
				}
			}

			if (errorItemFound) {
				errorSummaryControl.style.display = "block";
			} else {
				errorSummaryControl.style.display = "none";
			}
		}

		return false;
	})
};

var errorCollection = {

	items : new Array()

	,addErrorSummaryItem : function(errorSummaryControl, item) {

		var totalField = (!errorSummaryControl.hasAttribute("totalError") ? 0 : errorSummaryControl.getAttribute("totalError"));
		var foundError = !item.pass;
		var alreadyExist = false;
		var errorSummaryItems = errorSummaryControl.getElementsByTagName("div");

		for (var i=0; i<errorSummaryItems.length; i++) {

			if (errorSummaryItems[i].getAttribute("name") == item.errorControlId) {

				errorSummaryItems[i].style.display = (foundError ? "block" : "none");
				alreadyExist = true;
				break;
			}
		}

		if (!alreadyExist) {

			var newErrorElement = document.createElement('div');
			newErrorElement.setAttribute("name", item.errorControlId);
			newErrorElement.setAttribute("controlId", item.controlId);
			newErrorElement.style.display = (foundError ? "block" : "none");

			var newErrorElementImage = document.createElement('img');
			newErrorElementImage.setAttribute("src", "static/img/warning.png");

			var newErrorElementSpan = document.createElement('span');
			newErrorElementSpan.setAttribute("class", "space");
			newErrorElementSpan.setAttribute("controlId", item.controlId);
			newErrorElementSpan.innerHTML = item.errorMessage;

			newErrorElement.appendChild(newErrorElementImage);
			newErrorElement.appendChild(newErrorElementSpan);

			//newErrorElement.innerHTML = '<img src="static/img/warning.png" /><span class="space">'+ msg +'</span>';

			if (totalField == 0) {
				field.addCss(errorSummaryControl, "alert-error");

				if (errorSummaryControl.hasAttribute("title")) {

					var errorSummaryTitle = errorSummaryControl.getAttribute("title");
					errorSummaryControl.innerHTML = "<h4>" + errorSummaryTitle + "</h4>";
					errorSummaryControl.style.display = "none";
					errorSummaryControl.setAttribute("totalError", totalField);
				}
			}

			totalField += 1;
			errorSummaryControl.setAttribute("totalError", totalField);
			errorSummaryControl.appendChild(newErrorElement);
		}

		if (foundError) {
			errorSummaryControl.style.display = "block";
		}
	}
};

var validate = function (fs) {

	var pass = true;
	errorCollection.items = new Array();

	fs.forEach(function(controlId, cIndex) {

		var control = document.getElementById(controlId);
		var value = control.value;
		var errorControls = null;
		var controlFoundError = false;

		if (control.hasAttribute("error-controls")) {

			errorControls = control.getAttribute("error-controls").split(",");

			errorControls.forEach(function(eControlId) {

				var errorControl = document.getElementById(eControlId);
				var template = errorControl.getAttribute("template");
				var errorMessage = errorControl.getAttribute("error-message");
				var errorSummaryControlId = errorControl.getAttribute("error-summary");
				var errorSummaryControl = null;
				//var validFormat = field.format(template, value);

				if (errorSummaryControlId != null) {
					errorSummaryControl = document.getElementById(errorSummaryControlId);
				}

				var errorItem = {
					controlId : controlId
					, errorControlId : eControlId
					, template : template
					, errorSummaryControlId : (errorSummaryControl != null ? errorSummaryControlId : null)
					, errorMessage : errorMessage
					, pass : null //validFormat
				};

				if(!field.validate(errorItem, controlFoundError)) {
					controlFoundError = true;
					pass = false;
				}

				/* add into error summary */
				if (errorSummaryControl != null) {
					errorCollection.addErrorSummaryItem(errorSummaryControl, errorItem);
				}

				//alert("controlId: " + errorItem.controlId + " | errorControlId: " + errorItem.errorControlId + " | errorSummaryControlId: " + errorItem.errorSummaryControlId + " | errorMessage: " + errorItem.errorMessage + " | pass: " + errorItem.pass);

				errorCollection.items.push(errorItem);
			})

			// onchange event for each control
			control.addEventListener("change", function() {

				var controlFoundError = false;

				errorCollection.items.forEach(function(errorItem) {

					if (control.id == errorItem.controlId) {

						if(!field.validate(errorItem, controlFoundError)) {

							// show in error summary
							field.showErrorSummaryItem(errorItem.errorSummaryControlId, errorItem.errorControlId);

							controlFoundError = true;

						} else {

							// hide from error summary if visible
							field.hideErrorSummaryItem(errorItem.errorSummaryControlId, errorItem.errorControlId);
						}
					}
				});

				return (!controlFoundError);
			});
		}
	})

	return pass;
};

