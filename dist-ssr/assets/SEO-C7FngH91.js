import { t as require_dist } from "./dist-BkMweq9c.js";
import { a as normalizeCanonicalPath, c as useLanguage, n as SITE_EMAILS, o as normalizeSiteUrl, r as buildCanonicalUrl, t as DEFAULT_SITE_URL } from "./site-BXg7CYE6.js";
import { i as localizePath, o as stripLanguagePrefix, r as SUPPORTED_LANGUAGES, t as LANGUAGE_HREFLANGS } from "./route-DZfXJ_2f.js";
import React5, { Component } from "react";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/react-helmet-async/lib/index.esm.js
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
	TAG_NAMES2["BASE"] = "base";
	TAG_NAMES2["BODY"] = "body";
	TAG_NAMES2["HEAD"] = "head";
	TAG_NAMES2["HTML"] = "html";
	TAG_NAMES2["LINK"] = "link";
	TAG_NAMES2["META"] = "meta";
	TAG_NAMES2["NOSCRIPT"] = "noscript";
	TAG_NAMES2["SCRIPT"] = "script";
	TAG_NAMES2["STYLE"] = "style";
	TAG_NAMES2["TITLE"] = "title";
	TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
	return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
	link: { rel: [
		"amphtml",
		"canonical",
		"alternate"
	] },
	script: { type: ["application/ld+json"] },
	meta: {
		charset: "",
		name: [
			"generator",
			"robots",
			"description"
		],
		property: [
			"og:type",
			"og:title",
			"og:url",
			"og:image",
			"og:image:alt",
			"og:description",
			"twitter:url",
			"twitter:title",
			"twitter:description",
			"twitter:image",
			"twitter:image:alt",
			"twitter:card",
			"twitter:site"
		]
	}
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
	accesskey: "accessKey",
	charset: "charSet",
	class: "className",
	contenteditable: "contentEditable",
	contextmenu: "contextMenu",
	"http-equiv": "httpEquiv",
	itemprop: "itemProp",
	tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce((carry, [key, value]) => {
	carry[value] = key;
	return carry;
}, {});
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
	DEFAULT_TITLE: "defaultTitle",
	DEFER: "defer",
	ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	TITLE_TEMPLATE: "titleTemplate",
	PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
	for (let i = propsList.length - 1; i >= 0; i -= 1) {
		const props = propsList[i];
		if (Object.prototype.hasOwnProperty.call(props, property)) return props[property];
	}
	return null;
};
var getTitleFromPropsList = (propsList) => {
	let innermostTitle = getInnermostProperty(propsList, "title");
	const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
	if (Array.isArray(innermostTitle)) innermostTitle = innermostTitle.join("");
	if (innermostTemplate && innermostTitle) return innermostTemplate.replace(/%s/g, () => innermostTitle);
	const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
	return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({
	...tagAttrs,
	...current
}), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props["base"] !== "undefined").map((props) => props["base"]).reverse().reduce((innermostBaseTag, tag) => {
	if (!innermostBaseTag.length) {
		const keys = Object.keys(tag);
		for (let i = 0; i < keys.length; i += 1) {
			const lowerCaseAttributeKey = keys[i].toLowerCase();
			if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) return innermostBaseTag.concat(tag);
		}
	}
	return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
	const approvedSeenTags = {};
	return propsList.filter((props) => {
		if (Array.isArray(props[tagName])) return true;
		if (typeof props[tagName] !== "undefined") warn(`Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`);
		return false;
	}).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
		const instanceSeenTags = {};
		instanceTags.filter((tag) => {
			let primaryAttributeKey;
			const keys2 = Object.keys(tag);
			for (let i = 0; i < keys2.length; i += 1) {
				const attributeKey = keys2[i];
				const lowerCaseAttributeKey = attributeKey.toLowerCase();
				if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) primaryAttributeKey = lowerCaseAttributeKey;
				if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) primaryAttributeKey = attributeKey;
			}
			if (!primaryAttributeKey || !tag[primaryAttributeKey]) return false;
			const value = tag[primaryAttributeKey].toLowerCase();
			if (!approvedSeenTags[primaryAttributeKey]) approvedSeenTags[primaryAttributeKey] = {};
			if (!instanceSeenTags[primaryAttributeKey]) instanceSeenTags[primaryAttributeKey] = {};
			if (!approvedSeenTags[primaryAttributeKey][value]) {
				instanceSeenTags[primaryAttributeKey][value] = true;
				return true;
			}
			return false;
		}).reverse().forEach((tag) => approvedTags.push(tag));
		const keys = Object.keys(instanceSeenTags);
		for (let i = 0; i < keys.length; i += 1) {
			const attributeKey = keys[i];
			approvedSeenTags[attributeKey] = {
				...approvedSeenTags[attributeKey],
				...instanceSeenTags[attributeKey]
			};
		}
		return approvedTags;
	}, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
	if (Array.isArray(propsList) && propsList.length) {
		for (let index = 0; index < propsList.length; index += 1) if (propsList[index][checkedTag]) return true;
	}
	return false;
};
var reducePropsToState = (propsList) => ({
	baseTag: getBaseTagFromPropsList(["href"], propsList),
	bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
	defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
	encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
	linkTags: getTagsFromPropsList("link", ["rel", "href"], propsList),
	metaTags: getTagsFromPropsList("meta", [
		"name",
		"charset",
		"http-equiv",
		"property",
		"itemprop"
	], propsList),
	noscriptTags: getTagsFromPropsList("noscript", ["innerHTML"], propsList),
	onChangeClientState: getOnChangeClientState(propsList),
	scriptTags: getTagsFromPropsList("script", ["src", "innerHTML"], propsList),
	styleTags: getTagsFromPropsList("style", ["cssText"], propsList),
	title: getTitleFromPropsList(propsList),
	titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
	prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
	const keys = Object.keys(props);
	for (let i = 0; i < keys.length; i += 1) if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) return true;
	return false;
};
var prioritizer = (elementsList, propsToMatch) => {
	if (Array.isArray(elementsList)) return elementsList.reduce((acc, elementAttrs) => {
		if (checkIfPropsMatch(elementAttrs, propsToMatch)) acc.priority.push(elementAttrs);
		else acc.default.push(elementAttrs);
		return acc;
	}, {
		priority: [],
		default: []
	});
	return {
		default: elementsList,
		priority: []
	};
};
var without = (obj, key) => {
	return {
		...obj,
		[key]: void 0
	};
};
var SELF_CLOSING_TAGS = [
	"noscript",
	"script",
	"style"
];
var encodeSpecialCharacters = (str, encode = true) => {
	if (encode === false) return String(str);
	return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
	const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
	return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
	const attributeString = generateElementAttributesAsString(attributes);
	const flattenedTitle = flattenArray(title);
	return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(flattenedTitle, encode)}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(flattenedTitle, encode)}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
	const tag = t;
	const attributeHtml = Object.keys(tag).filter((attribute) => !(attribute === "innerHTML" || attribute === "cssText")).reduce((string, attribute) => {
		const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
		return string ? `${string} ${attr}` : attr;
	}, "");
	const tagContent = tag.innerHTML || tag.cssText || "";
	return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${SELF_CLOSING_TAGS.indexOf(type) === -1 ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
	const mapped = REACT_TAG_MAP[key];
	obj[mapped || key] = attributes[key];
	return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
	const props = convertElementAttributesToReactProps(attributes, {
		key: title,
		[HELMET_ATTRIBUTE]: true
	});
	return [React5.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
	const mappedTag = {
		key: i,
		[HELMET_ATTRIBUTE]: true
	};
	Object.keys(tag).forEach((attribute) => {
		const mappedAttribute = REACT_TAG_MAP[attribute] || attribute;
		if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") mappedTag.dangerouslySetInnerHTML = { __html: tag.innerHTML || tag.cssText };
		else mappedTag[mappedAttribute] = tag[attribute];
	});
	return React5.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
	switch (type) {
		case "title": return {
			toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
			toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
		};
		case "bodyAttributes":
		case "htmlAttributes": return {
			toComponent: () => convertElementAttributesToReactProps(tags),
			toString: () => generateElementAttributesAsString(tags)
		};
		default: return {
			toComponent: () => generateTagsAsReactComponent(type, tags),
			toString: () => generateTagsAsString(type, tags, encode)
		};
	}
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
	const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
	const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
	const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
	return {
		priorityMethods: {
			toComponent: () => [
				...generateTagsAsReactComponent("meta", meta.priority),
				...generateTagsAsReactComponent("link", link.priority),
				...generateTagsAsReactComponent("script", script.priority)
			],
			toString: () => `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag("link", link.priority, encode)} ${getMethodsForTag("script", script.priority, encode)}`
		},
		metaTags: meta.default,
		linkTags: link.default,
		scriptTags: script.default
	};
};
var mapStateOnServer = (props) => {
	const { baseTag, bodyAttributes, encode = true, htmlAttributes, noscriptTags, styleTags, title = "", titleAttributes, prioritizeSeoTags } = props;
	let { linkTags, metaTags, scriptTags } = props;
	let priorityMethods = {
		toComponent: () => [],
		toString: () => ""
	};
	if (prioritizeSeoTags) ({priorityMethods, linkTags, metaTags, scriptTags} = getPriorityMethods(props));
	return {
		priority: priorityMethods,
		base: getMethodsForTag("base", baseTag, encode),
		bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
		htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
		link: getMethodsForTag("link", linkTags, encode),
		meta: getMethodsForTag("meta", metaTags, encode),
		noscript: getMethodsForTag("noscript", noscriptTags, encode),
		script: getMethodsForTag("script", scriptTags, encode),
		style: getMethodsForTag("style", styleTags, encode),
		title: getMethodsForTag("title", {
			title,
			titleAttributes
		}, encode)
	};
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
	instances = [];
	canUseDOM = isDocument;
	context;
	value = {
		setHelmet: (serverState) => {
			this.context.helmet = serverState;
		},
		helmetInstances: {
			get: () => this.canUseDOM ? instances : this.instances,
			add: (instance) => {
				(this.canUseDOM ? instances : this.instances).push(instance);
			},
			remove: (instance) => {
				const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
				(this.canUseDOM ? instances : this.instances).splice(index, 1);
			}
		}
	};
	constructor(context, canUseDOM) {
		this.context = context;
		this.canUseDOM = canUseDOM || false;
		if (!canUseDOM) context.helmet = server_default({
			baseTag: [],
			bodyAttributes: {},
			encodeSpecialCharacters: true,
			htmlAttributes: {},
			linkTags: [],
			metaTags: [],
			noscriptTags: [],
			scriptTags: [],
			styleTags: [],
			title: "",
			titleAttributes: {}
		});
	}
};
var isReact19 = parseInt(React5.version.split(".")[0], 10) >= 19;
var Context = React5.createContext({});
var HelmetProvider = class _HelmetProvider extends Component {
	static canUseDOM = isDocument;
	helmetData;
	constructor(props) {
		super(props);
		if (isReact19) this.helmetData = null;
		else this.helmetData = new HelmetData(this.props.context || {}, _HelmetProvider.canUseDOM);
	}
	render() {
		if (isReact19) return /* @__PURE__ */ React5.createElement(React5.Fragment, null, this.props.children);
		return /* @__PURE__ */ React5.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
	}
};
var updateTags = (type, tags) => {
	const headElement = document.head || document.querySelector("head");
	const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
	const oldTags = [].slice.call(tagNodes);
	const newTags = [];
	let indexToDelete;
	if (tags && tags.length) tags.forEach((tag) => {
		const newElement = document.createElement(type);
		for (const attribute in tag) if (Object.prototype.hasOwnProperty.call(tag, attribute)) if (attribute === "innerHTML") newElement.innerHTML = tag.innerHTML;
		else if (attribute === "cssText") {
			const cssText = tag.cssText;
			newElement.appendChild(document.createTextNode(cssText));
		} else {
			const attr = attribute;
			const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
			newElement.setAttribute(attribute, value);
		}
		newElement.setAttribute(HELMET_ATTRIBUTE, "true");
		if (oldTags.some((existingTag, index) => {
			indexToDelete = index;
			return newElement.isEqualNode(existingTag);
		})) oldTags.splice(indexToDelete, 1);
		else newTags.push(newElement);
	});
	oldTags.forEach((tag) => tag.parentNode?.removeChild(tag));
	newTags.forEach((tag) => headElement.appendChild(tag));
	return {
		oldTags,
		newTags
	};
};
var updateAttributes = (tagName, attributes) => {
	const elementTag = document.getElementsByTagName(tagName)[0];
	if (!elementTag) return;
	const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
	const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	const attributesToRemove = [...helmetAttributes];
	const attributeKeys = Object.keys(attributes);
	for (const attribute of attributeKeys) {
		const value = attributes[attribute] || "";
		if (elementTag.getAttribute(attribute) !== value) elementTag.setAttribute(attribute, value);
		if (helmetAttributes.indexOf(attribute) === -1) helmetAttributes.push(attribute);
		const indexToSave = attributesToRemove.indexOf(attribute);
		if (indexToSave !== -1) attributesToRemove.splice(indexToSave, 1);
	}
	for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) elementTag.removeAttribute(attributesToRemove[i]);
	if (helmetAttributes.length === attributesToRemove.length) elementTag.removeAttribute(HELMET_ATTRIBUTE);
	else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
};
var updateTitle = (title, attributes) => {
	if (typeof title !== "undefined" && document.title !== title) document.title = flattenArray(title);
	updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
	const { baseTag, bodyAttributes, htmlAttributes, linkTags, metaTags, noscriptTags, onChangeClientState, scriptTags, styleTags, title, titleAttributes } = newState;
	updateAttributes("body", bodyAttributes);
	updateAttributes("html", htmlAttributes);
	updateTitle(title, titleAttributes);
	const tagUpdates = {
		baseTag: updateTags("base", baseTag),
		linkTags: updateTags("link", linkTags),
		metaTags: updateTags("meta", metaTags),
		noscriptTags: updateTags("noscript", noscriptTags),
		scriptTags: updateTags("script", scriptTags),
		styleTags: updateTags("style", styleTags)
	};
	const addedTags = {};
	const removedTags = {};
	Object.keys(tagUpdates).forEach((tagType) => {
		const { newTags, oldTags } = tagUpdates[tagType];
		if (newTags.length) addedTags[tagType] = newTags;
		if (oldTags.length) removedTags[tagType] = tagUpdates[tagType].oldTags;
	});
	if (cb) cb();
	onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
	if (_helmetCallback) cancelAnimationFrame(_helmetCallback);
	if (newState.defer) _helmetCallback = requestAnimationFrame(() => {
		commitTagChanges(newState, () => {
			_helmetCallback = null;
		});
	});
	else {
		commitTagChanges(newState);
		_helmetCallback = null;
	}
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
	rendered = false;
	shouldComponentUpdate(nextProps) {
		return !shallowEqual(nextProps, this.props);
	}
	componentDidUpdate() {
		this.emitChange();
	}
	componentWillUnmount() {
		const { helmetInstances } = this.props.context;
		helmetInstances.remove(this);
		this.emitChange();
	}
	emitChange() {
		const { helmetInstances, setHelmet } = this.props.context;
		let serverState = null;
		const state = reducePropsToState(helmetInstances.get().map((instance) => {
			const { context: _context, ...props } = instance.props;
			return props;
		}));
		if (HelmetProvider.canUseDOM) client_default(state);
		else if (server_default) serverState = server_default(state);
		setHelmet(serverState);
	}
	init() {
		if (this.rendered) return;
		this.rendered = true;
		const { helmetInstances } = this.props.context;
		helmetInstances.add(this);
		this.emitChange();
	}
	render() {
		this.init();
		return null;
	}
};
var react19Instances = [];
var toHtmlAttributes = (props) => {
	const result = {};
	for (const key of Object.keys(props)) result[HTML_TAG_MAP[key] || key] = props[key];
	return result;
};
var toReactProps = (attrs) => {
	const result = {};
	for (const key of Object.keys(attrs)) {
		const mapped = REACT_TAG_MAP[key];
		result[mapped || key] = attrs[key];
	}
	return result;
};
var applyAttributes = (tagName, attributes) => {
	if (!isDocument) return;
	const el = document.getElementsByTagName(tagName)[0];
	if (!el) return;
	const managedAttr = "data-rh-managed";
	const prev = el.getAttribute(managedAttr);
	const prevKeys = prev ? prev.split(",") : [];
	const nextKeys = Object.keys(attributes);
	for (const key of prevKeys) if (!nextKeys.includes(key)) el.removeAttribute(key);
	for (const key of nextKeys) {
		const value = attributes[key];
		if (value === void 0 || value === null || value === false) el.removeAttribute(key);
		else if (value === true) el.setAttribute(key, "");
		else el.setAttribute(key, String(value));
	}
	if (nextKeys.length > 0) el.setAttribute(managedAttr, nextKeys.join(","));
	else el.removeAttribute(managedAttr);
};
var syncAllAttributes = () => {
	const htmlAttrs = {};
	const bodyAttrs = {};
	for (const instance of react19Instances) {
		const { htmlAttributes, bodyAttributes } = instance.props;
		if (htmlAttributes) Object.assign(htmlAttrs, toHtmlAttributes(htmlAttributes));
		if (bodyAttributes) Object.assign(bodyAttrs, toHtmlAttributes(bodyAttributes));
	}
	applyAttributes("html", htmlAttrs);
	applyAttributes("body", bodyAttrs);
};
var React19Dispatcher = class extends Component {
	componentDidMount() {
		react19Instances.push(this);
		syncAllAttributes();
	}
	componentDidUpdate() {
		syncAllAttributes();
	}
	componentWillUnmount() {
		const index = react19Instances.indexOf(this);
		if (index !== -1) react19Instances.splice(index, 1);
		syncAllAttributes();
	}
	resolveTitle() {
		const { title, titleTemplate, defaultTitle } = this.props;
		if (title && titleTemplate) return titleTemplate.replace(/%s/g, () => Array.isArray(title) ? title.join("") : title);
		return title || defaultTitle || void 0;
	}
	renderTitle() {
		const title = this.resolveTitle();
		if (title === void 0) return null;
		const titleAttributes = this.props.titleAttributes || {};
		return React5.createElement("title", toReactProps(titleAttributes), title);
	}
	renderBase() {
		const { base } = this.props;
		if (!base) return null;
		return React5.createElement("base", toReactProps(base));
	}
	renderMeta() {
		const { meta } = this.props;
		if (!meta || !Array.isArray(meta)) return null;
		return meta.map((attrs, i) => React5.createElement("meta", {
			key: i,
			...toReactProps(attrs)
		}));
	}
	renderLink() {
		const { link } = this.props;
		if (!link || !Array.isArray(link)) return null;
		return link.map((attrs, i) => React5.createElement("link", {
			key: i,
			...toReactProps(attrs)
		}));
	}
	renderScript() {
		const { script } = this.props;
		if (!script || !Array.isArray(script)) return null;
		return script.map((attrs, i) => {
			const { innerHTML, ...rest } = attrs;
			const props = toReactProps(rest);
			if (innerHTML) props.dangerouslySetInnerHTML = { __html: innerHTML };
			return React5.createElement("script", {
				key: i,
				...props
			});
		});
	}
	renderStyle() {
		const { style } = this.props;
		if (!style || !Array.isArray(style)) return null;
		return style.map((attrs, i) => {
			const { cssText, ...rest } = attrs;
			const props = toReactProps(rest);
			if (cssText) props.dangerouslySetInnerHTML = { __html: cssText };
			return React5.createElement("style", {
				key: i,
				...props
			});
		});
	}
	renderNoscript() {
		const { noscript } = this.props;
		if (!noscript || !Array.isArray(noscript)) return null;
		return noscript.map((attrs, i) => {
			const { innerHTML, ...rest } = attrs;
			const props = toReactProps(rest);
			if (innerHTML) props.dangerouslySetInnerHTML = { __html: innerHTML };
			return React5.createElement("noscript", {
				key: i,
				...props
			});
		});
	}
	render() {
		return React5.createElement(React5.Fragment, null, this.renderTitle(), this.renderBase(), this.renderMeta(), this.renderLink(), this.renderScript(), this.renderStyle(), this.renderNoscript());
	}
};
var Helmet = class extends Component {
	static defaultProps = {
		defer: true,
		encodeSpecialCharacters: true,
		prioritizeSeoTags: false
	};
	shouldComponentUpdate(nextProps) {
		return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
	}
	mapNestedChildrenToProps(child, nestedChildren) {
		if (!nestedChildren) return null;
		switch (child.type) {
			case "script":
			case "noscript": return { innerHTML: nestedChildren };
			case "style": return { cssText: nestedChildren };
			default: throw new Error(`<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`);
		}
	}
	flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
		return {
			...arrayTypeChildren,
			[child.type]: [...arrayTypeChildren[child.type] || [], {
				...newChildProps,
				...this.mapNestedChildrenToProps(child, nestedChildren)
			}]
		};
	}
	mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
		switch (child.type) {
			case "title": return {
				...newProps,
				[child.type]: nestedChildren,
				titleAttributes: { ...newChildProps }
			};
			case "body": return {
				...newProps,
				bodyAttributes: { ...newChildProps }
			};
			case "html": return {
				...newProps,
				htmlAttributes: { ...newChildProps }
			};
			default: return {
				...newProps,
				[child.type]: { ...newChildProps }
			};
		}
	}
	mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
		let newFlattenedProps = { ...newProps };
		Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
			newFlattenedProps = {
				...newFlattenedProps,
				[arrayChildName]: arrayTypeChildren[arrayChildName]
			};
		});
		return newFlattenedProps;
	}
	warnOnInvalidChildren(child, nestedChildren) {
		invariant(VALID_TAG_NAMES.some((name) => child.type === name), typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(", ")} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`);
		invariant(!nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"), `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`);
		return true;
	}
	mapChildrenToProps(children, newProps) {
		let arrayTypeChildren = {};
		React5.Children.forEach(children, (child) => {
			if (!child || !child.props) return;
			const { children: nestedChildren, ...childProps } = child.props;
			const newChildProps = Object.keys(childProps).reduce((obj, key) => {
				obj[HTML_TAG_MAP[key] || key] = childProps[key];
				return obj;
			}, {});
			let { type } = child;
			if (typeof type === "symbol") type = type.toString();
			else this.warnOnInvalidChildren(child, nestedChildren);
			switch (type) {
				case "Symbol(react.fragment)":
					newProps = this.mapChildrenToProps(nestedChildren, newProps);
					break;
				case "link":
				case "meta":
				case "noscript":
				case "script":
				case "style":
					arrayTypeChildren = this.flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren);
					break;
				default:
					newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
					break;
			}
		});
		return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	}
	render() {
		const { children, ...props } = this.props;
		let newProps = { ...props };
		let { helmetData } = props;
		if (children) newProps = this.mapChildrenToProps(children, newProps);
		if (helmetData && !(helmetData instanceof HelmetData)) {
			helmetData = new HelmetData(helmetData.context, true);
			delete newProps.helmetData;
		}
		if (isReact19) return /* @__PURE__ */ React5.createElement(React19Dispatcher, { ...newProps });
		return helmetData ? /* @__PURE__ */ React5.createElement(HelmetDispatcher, {
			...newProps,
			context: helmetData.value
		}) : /* @__PURE__ */ React5.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React5.createElement(HelmetDispatcher, {
			...newProps,
			context
		}));
	}
};
//#endregion
//#region src/data/articleTranslations.ts
var import_dist = require_dist();
var articleTranslations = {
	"spf-dkim-dmarc-google-workspace-security-domain": {
		tr: {
			title: "Google Workspace Güvenlik Alanı için SPF, DKIM ve DMARC Kurulumu",
			description: "Daha güçlü güven, daha düşük spoofing riski ve kurumsal e-posta itibarı isteyen şirket alan adları için pratik Google Workspace e-posta kimlik doğrulama rehberi.",
			tags: [
				"E-posta Güvenliği",
				"Google Workspace",
				"DMARC",
				"DNS"
			],
			summary: [
				"SPF, alan adı adına e-posta göndermesine izin verilen posta sunucularını tanımlar.",
				"DKIM, alıcıların içeriğin aktarım sırasında değiştirilmediğini doğrulayabilmesi için mesajları imzalar.",
				"DMARC, SPF veya DKIM hizalaması başarısız olduğunda alıcılara nasıl davranacaklarını ve raporları nereye göndereceklerini söyler."
			],
			sections: [
				{
					heading: "Yeni bir şirket alan adı için neden önemlidir",
					paragraphs: ["Bir şirket sitesi profesyonel görünebilir, fakat e-posta alan adı hâlâ kolayca taklit edilebilir durumda olabilir. SPF, DKIM ve DMARC; alıcılara kimin e-posta göndermeye yetkili olduğunu ve başarısız doğrulamaların nasıl ele alınacağını göstererek bu boşluğu kapatır.", "Güvenlik odaklı bir şirket için bu yalnızca estetik bir iyileştirme değildir. Site üzerinde contact, support, security, privacy, legal ve sales gibi posta kutuları yayınlanıyorsa, bu yapı kamuya açık güven yüzeyinin bir parçasıdır."]
				},
				{
					heading: "Önerilen devreye alma sırası",
					bullets: [
						"Önce operasyonel posta kutularını oluşturun; dmarc@example.com gibi bir DMARC raporlama posta kutusu dahil olmalıdır.",
						"Google Workspace gibi aktif gönderici için SPF kaydını yayınlayın.",
						"Google Workspace DKIM imzalamayı etkinleştirin ve DKIM TXT kaydını DNS üzerinde yayınlayın.",
						"DMARC politikasını p=none ve raporlama açık şekilde başlatın; böylece yaptırıma geçmeden önce hatalar gözlemlenebilir.",
						"Yalnızca meşru göndericiler hizalandıktan sonra quarantine veya reject politikasına ilerleyin."
					]
				},
				{
					heading: "Neler doğrulanmalı",
					paragraphs: ["Doğrulama hem DNS kayıtlarından hem de gerçek mesaj başlıklarından yapılmalıdır. DNS kayıtların varlığını doğrular. Mesaj başlıkları ise üretim gönderim yolundan çıkan e-postanın gerçekten SPF, DKIM ve DMARC hizalamasından geçtiğini gösterir."],
					bullets: [
						"SPF yalnızca alan adı adına gerçekten e-posta gönderen servisleri içermelidir.",
						"DKIM güncel bir selector kullanmalı ve alınan mesajlarda pass sonucu göstermelidir.",
						"DMARC raporları izlenen bir posta kutusuna teslim edilmelidir.",
						"Politika belgelenmelidir; böylece gelecekte eklenen e-posta araçları teslim edilebilirliği bozmaz."
					]
				},
				{
					heading: "Şirket seviyesinde sonraki adım",
					paragraphs: ["Raporlar temiz göründükten sonra DMARC kademeli olarak sıkılaştırılmalıdır. En güçlü son durum reject politikasındır; ancak doğru zamanlama, bültenler, transactional mail, CRM araçları veya destek araçlarının da aynı alan adından gönderim yapıp yapmadığına bağlıdır."]
				}
			],
			references: [{
				label: "Google Workspace e-posta kimlik doğrulama yardımı",
				url: "https://support.google.com/a/topic/2759254"
			}, {
				label: "DMARC spesifikasyon özeti",
				url: "https://dmarc.org/"
			}]
		},
		de: {
			title: "SPF-, DKIM- und DMARC-Setup für eine Google-Workspace-Sicherheitsdomain",
			description: "Ein praxisnaher Leitfaden zur Google-Workspace-E-Mail-Authentifizierung für Unternehmensdomains, die mehr Vertrauen und ein geringeres Spoofing-Risiko benötigen.",
			tags: [
				"E-Mail-Sicherheit",
				"Google Workspace",
				"DMARC",
				"DNS"
			],
			summary: [
				"SPF autorisiert die Mailserver, die für die Domain senden dürfen.",
				"DKIM signiert Nachrichten, damit Empfänger prüfen können, ob Inhalte unterwegs verändert wurden.",
				"DMARC sagt Empfängern, was bei fehlgeschlagener SPF- oder DKIM-Ausrichtung passieren soll und wohin Reports gesendet werden."
			],
			sections: [
				{
					heading: "Warum das für eine junge Unternehmensdomain zählt",
					paragraphs: ["Eine Unternehmenswebsite kann professionell wirken, während die E-Mail-Domain weiterhin leicht zu imitieren ist. SPF, DKIM und DMARC schließen diese Lücke, indem sie Empfängern Belege liefern, wer senden darf und wie Fehler behandelt werden sollen.", "Für ein sicherheitsorientiertes Unternehmen ist das keine optionale Politur. Es gehört zur öffentlichen Vertrauensfläche, besonders wenn die Website Kontakt-, Support-, Security-, Privacy-, Legal- und Sales-Mailboxen veröffentlicht."]
				},
				{
					heading: "Empfohlene Rollout-Reihenfolge",
					bullets: [
						"Legen Sie zuerst die operativen Mailboxen an, inklusive einer DMARC-Reporting-Mailbox wie dmarc@example.com.",
						"Veröffentlichen Sie SPF für den aktiven Sender, zum Beispiel Google Workspace.",
						"Aktivieren Sie DKIM-Signaturen in Google Workspace und veröffentlichen Sie den DKIM-TXT-Record.",
						"Starten Sie DMARC mit p=none und aktiviertem Reporting, damit Fehler vor der Durchsetzung beobachtet werden können.",
						"Wechseln Sie erst zu quarantine oder reject, wenn legitime Sender ausgerichtet sind."
					]
				},
				{
					heading: "Was verifiziert werden sollte",
					paragraphs: ["Die Verifikation sollte über DNS und über echte Nachrichten-Header erfolgen. DNS bestätigt, dass die Records existieren. Header zeigen, ob E-Mails über den produktiven Pfad tatsächlich SPF, DKIM und DMARC Alignment bestehen."],
					bullets: [
						"SPF enthält nur Dienste, die wirklich für die Domain senden.",
						"DKIM nutzt einen aktuellen Selector und zeigt in empfangenen Nachrichten pass.",
						"DMARC-Reports werden an eine überwachte Mailbox zugestellt.",
						"Die Policy ist dokumentiert, damit künftige Mail-Tools die Zustellbarkeit nicht brechen."
					]
				},
				{
					heading: "Nächster Schritt auf Unternehmensniveau",
					paragraphs: ["Wenn die Reports sauber aussehen, sollte DMARC schrittweise verschärft werden. Der stärkste Zielzustand ist reject, aber der richtige Zeitplan hängt davon ab, ob Newsletter, transaktionale E-Mails, CRM-Tools oder Support-Tools ebenfalls von der Domain senden."]
				}
			],
			references: [{
				label: "Google Workspace Hilfe zur E-Mail-Authentifizierung",
				url: "https://support.google.com/a/topic/2759254"
			}, {
				label: "DMARC-Spezifikationsüberblick",
				url: "https://dmarc.org/"
			}]
		},
		ja: {
			title: "Google Workspace セキュリティドメイン向け SPF・DKIM・DMARC 設定",
			description: "信頼性を高め、なりすましリスクを下げたい企業ドメインのための Google Workspace メール認証の実践ガイド。",
			tags: [
				"メールセキュリティ",
				"Google Workspace",
				"DMARC",
				"DNS"
			],
			summary: [
				"SPF は、そのドメインから送信できるメールサーバーを認可します。",
				"DKIM はメッセージに署名し、受信側が転送中に内容が変更されていないことを確認できるようにします。",
				"DMARC は SPF または DKIM のアラインメントに失敗した場合の扱いと、レポート送信先を受信側に伝えます。"
			],
			sections: [
				{
					heading: "新しい企業ドメインで重要な理由",
					paragraphs: ["企業サイトがプロフェッショナルに見えても、メールドメインが簡単になりすまされる状態のままでは信頼面に穴が残ります。SPF、DKIM、DMARC は、誰が送信を許可されているか、失敗時にどう扱うべきかを受信側に示し、その穴を埋めます。", "セキュリティを重視する会社にとって、これは任意の仕上げではありません。contact、support、security、privacy、legal、sales などのメールボックスを公開している場合、公開された信頼面そのものの一部です。"]
				},
				{
					heading: "推奨する展開順序",
					bullets: [
						"まず運用メールボックスを作成します。dmarc@example.com のような DMARC レポート用メールボックスも含めます。",
						"Google Workspace など、実際に送信するサービスに対して SPF を公開します。",
						"Google Workspace の DKIM 署名を有効化し、DKIM TXT レコードを公開します。",
						"DMARC は p=none とレポート有効化から開始し、強制適用前に失敗を観測します。",
						"正当な送信元がアラインメントできてから quarantine または reject に進めます。"
					]
				},
				{
					heading: "確認すべきこと",
					paragraphs: ["確認は DNS と実際のメッセージヘッダーの両方で行うべきです。DNS はレコードの存在を確認します。メッセージヘッダーは、本番の送信経路から送られたメールが実際に SPF、DKIM、DMARC のアラインメントを通過しているかを示します。"],
					bullets: [
						"SPF には、そのドメインから本当に送信するサービスだけが含まれている。",
						"DKIM は現在の selector を使い、受信メッセージで pass を示している。",
						"DMARC レポートが監視対象のメールボックスに届いている。",
						"将来のメールツール追加で到達性を壊さないよう、ポリシーが文書化されている。"
					]
				},
				{
					heading: "企業レベルの次の一手",
					paragraphs: ["レポートが安定してきたら、DMARC を段階的に厳格化します。最も強い最終状態は reject ですが、適切なタイミングはニュースレター、トランザクションメール、CRM、サポートツールが同じドメインから送信しているかによって変わります。"]
				}
			],
			references: [{
				label: "Google Workspace メール認証ヘルプ",
				url: "https://support.google.com/a/topic/2759254"
			}, {
				label: "DMARC 仕様の概要",
				url: "https://dmarc.org/"
			}]
		},
		"zh-CN": {
			title: "面向 Google Workspace 安全域名的 SPF、DKIM 与 DMARC 配置",
			description: "面向需要更强信任度和更低仿冒风险的公司域名，提供实用的 Google Workspace 邮件认证指南。",
			tags: [
				"邮件安全",
				"Google Workspace",
				"DMARC",
				"DNS"
			],
			summary: [
				"SPF 授权哪些邮件服务器可以代表该域名发送邮件。",
				"DKIM 对消息进行签名，使接收方可以验证内容在传输过程中未被篡改。",
				"DMARC 告诉接收方在 SPF 或 DKIM 对齐失败时如何处理，以及将报告发送到哪里。"
			],
			sections: [
				{
					heading: "为什么这对年轻公司域名很重要",
					paragraphs: ["公司网站可以看起来很专业，但邮件域名仍可能很容易被冒充。SPF、DKIM 和 DMARC 通过向接收方提供谁被允许发送邮件、失败应如何处理的证据，弥补这一缺口。", "对于一家强调安全的公司，这不是可有可无的装饰。尤其当网站公开 contact、support、security、privacy、legal 和 sales 等邮箱时，它就是公共信任面的组成部分。"]
				},
				{
					heading: "建议的上线顺序",
					bullets: [
						"先创建运营邮箱，包括 dmarc@example.com 这样的 DMARC 报告邮箱。",
						"为实际发送方发布 SPF，例如 Google Workspace。",
						"启用 Google Workspace DKIM 签名，并发布 DKIM TXT 记录。",
						"DMARC 从 p=none 和报告启用开始，先观察失败情况再进入强制策略。",
						"只有在合法发送方完成对齐后，再切换到 quarantine 或 reject。"
					]
				},
				{
					heading: "需要验证什么",
					paragraphs: ["验证应同时来自 DNS 和真实消息头。DNS 确认记录存在。消息头确认通过生产发送路径发出的邮件确实通过 SPF、DKIM 和 DMARC 对齐。"],
					bullets: [
						"SPF 只包含真正代表该域名发送邮件的服务。",
						"DKIM 使用当前 selector，并在收到的消息中显示 pass。",
						"DMARC 报告会投递到受监控的邮箱。",
						"策略需要被记录下来，避免未来新增邮件工具破坏可送达性。"
					]
				},
				{
					heading: "公司级下一步",
					paragraphs: ["当报告看起来干净后，应逐步收紧 DMARC。最强的最终状态是 reject，但正确节奏取决于新闻邮件、事务邮件、CRM 工具或支持工具是否也从该域名发送。"]
				}
			],
			references: [{
				label: "Google Workspace 邮件认证帮助",
				url: "https://support.google.com/a/topic/2759254"
			}, {
				label: "DMARC 规范概览",
				url: "https://dmarc.org/"
			}]
		},
		es: {
			title: "Configuración de SPF, DKIM y DMARC para un dominio de seguridad en Google Workspace",
			description: "Guía práctica de autenticación de correo en Google Workspace para dominios de empresa que necesitan más confianza y menor riesgo de suplantación.",
			tags: [
				"Seguridad de correo",
				"Google Workspace",
				"DMARC",
				"DNS"
			],
			summary: [
				"SPF autoriza los servidores de correo que pueden enviar en nombre del dominio.",
				"DKIM firma los mensajes para que los receptores verifiquen que el contenido no cambió en tránsito.",
				"DMARC indica qué hacer cuando falla la alineación SPF o DKIM y dónde enviar los informes."
			],
			sections: [
				{
					heading: "Por qué importa para un dominio joven de empresa",
					paragraphs: ["Un sitio corporativo puede parecer profesional mientras su dominio de correo sigue siendo fácil de suplantar. SPF, DKIM y DMARC cierran esa brecha dando a los receptores evidencia sobre quién está autorizado a enviar y cómo deben manejarse los fallos.", "Para una empresa enfocada en seguridad, no es un detalle opcional. Es parte de la superficie pública de confianza, especialmente cuando el sitio publica buzones de contacto, soporte, seguridad, privacidad, legal y ventas."]
				},
				{
					heading: "Orden recomendado de despliegue",
					bullets: [
						"Cree primero los buzones operativos, incluido un buzón de informes DMARC como dmarc@example.com.",
						"Publique SPF para el remitente activo, por ejemplo Google Workspace.",
						"Active la firma DKIM en Google Workspace y publique el registro TXT de DKIM.",
						"Empiece DMARC con p=none e informes habilitados para observar fallos antes de aplicar una política estricta.",
						"Pase a quarantine o reject solo después de alinear los remitentes legítimos."
					]
				},
				{
					heading: "Qué verificar",
					paragraphs: ["La verificación debe hacerse tanto en DNS como en cabeceras reales de mensajes. DNS confirma que los registros existen. Las cabeceras confirman que el correo enviado por la ruta de producción está pasando la alineación SPF, DKIM y DMARC."],
					bullets: [
						"SPF incluye solo los servicios que realmente envían correo para el dominio.",
						"DKIM usa un selector actual y muestra pass en los mensajes recibidos.",
						"Los informes DMARC llegan a un buzón monitorizado.",
						"La política está documentada para que futuras herramientas de correo no rompan la entregabilidad."
					]
				},
				{
					heading: "Siguiente paso de nivel empresa",
					paragraphs: ["Cuando los informes estén limpios, endurezca DMARC de forma gradual. El estado final más fuerte es reject, pero el calendario correcto depende de si newsletters, correo transaccional, CRM o herramientas de soporte también envían desde el dominio."]
				}
			],
			references: [{
				label: "Ayuda de autenticación de correo de Google Workspace",
				url: "https://support.google.com/a/topic/2759254"
			}, {
				label: "Resumen de la especificación DMARC",
				url: "https://dmarc.org/"
			}]
		},
		fr: {
			title: "Configuration SPF, DKIM et DMARC pour un domaine de sécurité Google Workspace",
			description: "Guide pratique d’authentification e-mail Google Workspace pour les domaines d’entreprise qui veulent renforcer la confiance et réduire le risque d’usurpation.",
			tags: [
				"Sécurité e-mail",
				"Google Workspace",
				"DMARC",
				"DNS"
			],
			summary: [
				"SPF autorise les serveurs de messagerie pouvant envoyer pour le domaine.",
				"DKIM signe les messages afin que les destinataires vérifient que le contenu n’a pas été modifié en transit.",
				"DMARC indique quoi faire lorsque l’alignement SPF ou DKIM échoue et où envoyer les rapports."
			],
			sections: [
				{
					heading: "Pourquoi c’est important pour un jeune domaine d’entreprise",
					paragraphs: ["Un site d’entreprise peut sembler professionnel alors que son domaine e-mail reste facile à usurper. SPF, DKIM et DMARC ferment cet écart en donnant aux destinataires des preuves sur les expéditeurs autorisés et le traitement attendu des échecs.", "Pour une entreprise orientée sécurité, ce n’est pas une finition optionnelle. C’est une partie de la surface publique de confiance, surtout lorsque le site publie des boîtes contact, support, security, privacy, legal et sales."]
				},
				{
					heading: "Ordre de déploiement recommandé",
					bullets: [
						"Créez d’abord les boîtes opérationnelles, y compris une boîte de rapports DMARC comme dmarc@example.com.",
						"Publiez SPF pour l’expéditeur actif, par exemple Google Workspace.",
						"Activez la signature DKIM Google Workspace et publiez l’enregistrement TXT DKIM.",
						"Démarrez DMARC avec p=none et les rapports activés afin d’observer les échecs avant application stricte.",
						"Passez à quarantine ou reject seulement après alignement des expéditeurs légitimes."
					]
				},
				{
					heading: "Ce qu’il faut vérifier",
					paragraphs: ["La vérification doit se faire à la fois dans le DNS et dans les en-têtes de vrais messages. Le DNS confirme l’existence des enregistrements. Les en-têtes confirment que le courrier envoyé par le chemin de production passe réellement l’alignement SPF, DKIM et DMARC."],
					bullets: [
						"SPF ne contient que les services qui envoient réellement pour le domaine.",
						"DKIM utilise un selector actuel et affiche pass dans les messages reçus.",
						"Les rapports DMARC arrivent dans une boîte surveillée.",
						"La politique est documentée pour éviter qu’un futur outil e-mail ne casse la délivrabilité."
					]
				},
				{
					heading: "Étape suivante de niveau entreprise",
					paragraphs: ["Lorsque les rapports sont propres, durcissez DMARC progressivement. L’état final le plus fort est reject, mais le bon calendrier dépend des newsletters, e-mails transactionnels, outils CRM ou outils de support qui peuvent aussi envoyer depuis le domaine."]
				}
			],
			references: [{
				label: "Aide Google Workspace sur l’authentification e-mail",
				url: "https://support.google.com/a/topic/2759254"
			}, {
				label: "Vue d’ensemble de la spécification DMARC",
				url: "https://dmarc.org/"
			}]
		},
		ko: {
			title: "Google Workspace 보안 도메인을 위한 SPF, DKIM, DMARC 설정",
			description: "더 높은 신뢰와 낮은 스푸핑 위험이 필요한 회사 도메인을 위한 Google Workspace 이메일 인증 실무 가이드입니다.",
			tags: [
				"이메일 보안",
				"Google Workspace",
				"DMARC",
				"DNS"
			],
			summary: [
				"SPF는 해당 도메인으로 메일을 보낼 수 있는 메일 서버를 승인합니다.",
				"DKIM은 메시지에 서명하여 수신자가 전송 중 콘텐츠가 변경되지 않았는지 확인할 수 있게 합니다.",
				"DMARC는 SPF 또는 DKIM 정렬이 실패했을 때 수신자가 무엇을 해야 하는지와 보고서를 어디로 보내야 하는지 알려줍니다."
			],
			sections: [
				{
					heading: "초기 회사 도메인에서 중요한 이유",
					paragraphs: ["회사 웹사이트가 전문적으로 보여도 이메일 도메인은 여전히 쉽게 사칭될 수 있습니다. SPF, DKIM, DMARC는 누가 메일을 보낼 수 있는지와 실패를 어떻게 처리해야 하는지에 대한 증거를 수신자에게 제공해 이 간극을 줄입니다.", "보안을 강조하는 회사라면 이것은 선택적인 마감 작업이 아닙니다. 사이트가 contact, support, security, privacy, legal, sales 같은 메일함을 공개한다면 이는 공개 신뢰 표면의 일부입니다."]
				},
				{
					heading: "권장 적용 순서",
					bullets: [
						"먼저 운영 메일함을 생성합니다. dmarc@example.com 같은 DMARC 보고 메일함도 포함합니다.",
						"Google Workspace처럼 실제 발신에 쓰이는 서비스에 대해 SPF를 게시합니다.",
						"Google Workspace DKIM 서명을 활성화하고 DKIM TXT 레코드를 게시합니다.",
						"DMARC는 p=none과 보고 활성화로 시작하여 강제 정책 전에 실패를 관찰합니다.",
						"정상 발신자가 정렬된 뒤에만 quarantine 또는 reject로 이동합니다."
					]
				},
				{
					heading: "확인해야 할 항목",
					paragraphs: ["검증은 DNS와 실제 메시지 헤더 양쪽에서 수행해야 합니다. DNS는 레코드 존재를 확인합니다. 메시지 헤더는 운영 발신 경로에서 보낸 메일이 실제로 SPF, DKIM, DMARC 정렬을 통과하는지 보여줍니다."],
					bullets: [
						"SPF에는 도메인을 대신해 실제로 메일을 보내는 서비스만 포함되어야 합니다.",
						"DKIM은 최신 selector를 사용하고 수신 메시지에서 pass를 보여야 합니다.",
						"DMARC 보고서는 모니터링되는 메일함으로 전달되어야 합니다.",
						"향후 메일 도구가 전달성을 깨뜨리지 않도록 정책을 문서화해야 합니다."
					]
				},
				{
					heading: "회사급 다음 단계",
					paragraphs: ["보고서가 안정적으로 깨끗해지면 DMARC를 단계적으로 강화합니다. 가장 강한 최종 상태는 reject이지만, 적절한 일정은 뉴스레터, 트랜잭션 메일, CRM 도구 또는 지원 도구가 같은 도메인에서 발신하는지에 따라 달라집니다."]
				}
			],
			references: [{
				label: "Google Workspace 이메일 인증 도움말",
				url: "https://support.google.com/a/topic/2759254"
			}, {
				label: "DMARC 사양 개요",
				url: "https://dmarc.org/"
			}]
		}
	},
	"security-headers-cloudflare-pages-react": {
		tr: {
			title: "Cloudflare Pages ve React Siteleri için Güvenlik Başlıkları",
			description: "Statik React dağıtımlarında yaygın tarayıcı tarafı riskleri azaltmak için güvenlik başlıkları, canonical metadata ve yanıt doğrulama nasıl kullanılmalı.",
			tags: [
				"Cloudflare",
				"React",
				"Güvenlik Başlıkları",
				"Frontend Güvenliği"
			],
			summary: [
				"Güvenlik başlıkları yalnızca kod yorumu değil, dağıtım konfigürasyonu olarak ele alınmalıdır.",
				"Cloudflare Pages, yayın öncesi test edilebilen statik header kurallarını destekler.",
				"Wildcard CORS, özel bir cross-origin kullanım ihtiyacı yoksa genel statik yanıtlar için çoğu zaman fazla geniştir."
			],
			sections: [
				{
					heading: "Temel başlık seti",
					paragraphs: ["Güçlendirilmiş bir React sitesi, tarayıcı davranışını açıkça tanımlamalıdır. Kesin politika uygulamaya bağlıdır; ancak temel set genellikle content type koruması, clickjacking koruması, referrer kontrolü, permissions policy ve dikkatle seçilmiş bir content security policy içerir.", "Statik hostlarda bunu unutmak kolaydır; çünkü uygulama başlıklar olmadan da render edilir. Güvenlik çalışması HTTP yanıt katmanında doğrulanmalıdır."]
				},
				{
					heading: "Cloudflare Pages için dikkat edilmesi gerekenler",
					bullets: [
						"Header kurallarını mümkün olduğunda repoya yakın tutun; böylece değişiklikler kodla birlikte incelenir.",
						"Dokümante edilmemiş dashboard değişikliklerinden kaçının; gelecekte denetlenmeleri daha zordur.",
						"Hem www hem apex alan adları servis ediliyorsa ikisini de doğrulayın.",
						"Redirect zincirlerinin final yanıttan önemli başlıkları düşürmediğini kontrol edin."
					]
				},
				{
					heading: "CORS bilinçli olmalı",
					paragraphs: ["Access-Control-Allow-Origin: * çoğu zaman sebep olmadan sitelere kopyalanır. Normal web sayfalarında geniş CORS genellikle ziyaretçiye fayda sağlamaz ve aynı politika altında ileride endpoint eklenirse istemeden veri açığa çıkmasını kolaylaştırabilir."]
				},
				{
					heading: "Neler otomatikleştirilmeli",
					bullets: [
						"Statik header konfigürasyonunda wildcard CORS kullanımını reddeden bir test.",
						"Sitemap ve robots dosyalarını yayınlayan bir build adımı.",
						"Kritik sayfaların render edildiğini ve metadata bulunduğunu doğrulayan preview kontrolü.",
						"Dağıtım sonrası production domainleri için canlı yanıt kontrolü."
					]
				}
			],
			references: [{
				label: "Cloudflare Pages header dokümantasyonu",
				url: "https://developers.cloudflare.com/pages/configuration/headers/"
			}, {
				label: "MDN HTTP güvenlik başlıkları özeti",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
			}]
		},
		de: {
			title: "Security Headers für Cloudflare Pages und React-Websites",
			description: "Wie Security Headers, kanonische Metadaten und Response-Verifikation typische browserseitige Risiken auf statischen React-Deployments reduzieren.",
			tags: [
				"Cloudflare",
				"React",
				"Security Headers",
				"Frontend-Sicherheit"
			],
			summary: [
				"Security Headers sollten als Deployment-Konfiguration behandelt werden, nicht als bloße Code-Kommentare.",
				"Cloudflare Pages unterstützt statische Header-Regeln, die vor Release getestet werden können.",
				"Wildcard-CORS ist für öffentliche statische Antworten meist zu breit, wenn es keinen konkreten Cross-Origin-Anwendungsfall gibt."
			],
			sections: [
				{
					heading: "Das Basis-Header-Set",
					paragraphs: ["Eine gehärtete React-Site sollte Browserverhalten explizit setzen. Die genaue Policy hängt von der Anwendung ab, enthält aber meist Content-Type-Schutz, Clickjacking-Schutz, Referrer-Kontrolle, Permissions Policy und eine bewusst gewählte Content Security Policy.", "Bei statischen Hosts wird das leicht vergessen, weil die App auch ohne Header rendert. Die Sicherheitsarbeit muss auf der HTTP-Response-Ebene verifiziert werden."]
				},
				{
					heading: "Cloudflare-Pages-Besonderheiten",
					bullets: [
						"Halten Sie Header-Regeln möglichst nah am Repository, damit Änderungen mit Code reviewed werden.",
						"Vermeiden Sie reine Dashboard-Änderungen ohne Dokumentation, weil sie später schwerer zu auditieren sind.",
						"Prüfen Sie www und Apex-Domain, wenn beide ausgeliefert werden.",
						"Kontrollieren Sie, dass Redirects wichtige Header aus der finalen Response nicht entfernen."
					]
				},
				{
					heading: "CORS braucht Absicht",
					paragraphs: ["Access-Control-Allow-Origin: * wird oft ohne Grund in Websites kopiert. Für normale Webseiten hilft breites CORS Besuchern meist nicht und kann unbeabsichtigte Datenexposition erleichtern, wenn später Endpunkte unter derselben Policy ergänzt werden."]
				},
				{
					heading: "Was automatisiert werden sollte",
					bullets: [
						"Ein Test, der Wildcard-CORS in der statischen Header-Konfiguration ablehnt.",
						"Ein Build-Schritt, der Sitemap- und Robots-Dateien veröffentlicht.",
						"Ein Preview-Check, der Rendering kritischer Seiten und vorhandene Metadaten bestätigt.",
						"Ein Live-Response-Check nach dem Deployment für Produktionsdomains."
					]
				}
			],
			references: [{
				label: "Cloudflare Pages Dokumentation zu Headers",
				url: "https://developers.cloudflare.com/pages/configuration/headers/"
			}, {
				label: "MDN Überblick zu HTTP-Sicherheitsheadern",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
			}]
		},
		ja: {
			title: "Cloudflare Pages と React サイトのセキュリティヘッダー",
			description: "静的 React デプロイで一般的なブラウザ側リスクを下げるために、セキュリティヘッダー、canonical メタデータ、レスポンス検証をどう使うか。",
			tags: [
				"Cloudflare",
				"React",
				"セキュリティヘッダー",
				"フロントエンドセキュリティ"
			],
			summary: [
				"セキュリティヘッダーはコードコメントではなく、デプロイ設定として扱うべきです。",
				"Cloudflare Pages は、リリース前にテストできる静的ヘッダールールをサポートします。",
				"明確な cross-origin 用途がない限り、公開静的レスポンスに対する wildcard CORS は広すぎることが多いです。"
			],
			sections: [
				{
					heading: "ベースラインとなるヘッダーセット",
					paragraphs: ["強化された React サイトでは、ブラウザの挙動を明示的に設定すべきです。正確なポリシーはアプリに依存しますが、通常は content type 保護、clickjacking 対策、referrer 制御、permissions policy、慎重に設計した content security policy を含みます。", "静的ホストでは、ヘッダーがなくてもアプリが表示されるため、この作業が忘れられがちです。セキュリティは HTTP レスポンス層で検証する必要があります。"]
				},
				{
					heading: "Cloudflare Pages での考慮点",
					bullets: [
						"可能な限りヘッダールールをリポジトリ近くに置き、コードと一緒にレビューできるようにします。",
						"ドキュメント化されていない dashboard のみの変更は、将来の監査が難しくなるため避けます。",
						"www と apex の両方を配信している場合は、両方を確認します。",
						"redirect によって最終レスポンスから重要なヘッダーが落ちていないか確認します。"
					]
				},
				{
					heading: "CORS は意図を持って設定する",
					paragraphs: ["Access-Control-Allow-Origin: * は理由なくコピーされることがあります。通常の Web ページでは広い CORS は訪問者にほとんど利益を与えず、将来同じポリシー下に endpoint が追加された場合に偶発的なデータ露出を容易にする可能性があります。"]
				},
				{
					heading: "自動化すべきこと",
					bullets: [
						"静的ヘッダー設定で wildcard CORS を拒否するテスト。",
						"sitemap と robots ファイルを公開する build ステップ。",
						"重要ページが render され、metadata が存在することを確認する preview チェック。",
						"デプロイ後に production ドメインで live response を確認するチェック。"
					]
				}
			],
			references: [{
				label: "Cloudflare Pages ヘッダー設定ドキュメント",
				url: "https://developers.cloudflare.com/pages/configuration/headers/"
			}, {
				label: "MDN HTTP セキュリティヘッダー概要",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
			}]
		},
		"zh-CN": {
			title: "Cloudflare Pages 与 React 站点的安全响应头",
			description: "如何通过安全响应头、规范化元数据和响应验证，降低静态 React 部署中的常见浏览器端风险。",
			tags: [
				"Cloudflare",
				"React",
				"安全响应头",
				"前端安全"
			],
			summary: [
				"安全响应头应被视为部署配置，而不只是代码注释。",
				"Cloudflare Pages 支持可在发布前测试的静态 header 规则。",
				"除非有明确的跨源使用场景，通配 CORS 对公共静态响应通常过于宽泛。"
			],
			sections: [
				{
					heading: "基线响应头集合",
					paragraphs: ["加固后的 React 站点应明确设置浏览器行为。具体策略取决于应用，但基线通常包括内容类型保护、点击劫持防护、referrer 控制、permissions policy，以及谨慎选择的 content security policy。", "静态托管很容易让人忽略这一点，因为即使没有这些响应头，应用仍然会渲染。安全工作必须在 HTTP 响应层进行验证。"]
				},
				{
					heading: "Cloudflare Pages 注意事项",
					bullets: [
						"尽可能将 header 规则放在仓库附近，使变更可以随代码一起审查。",
						"避免只有 dashboard 中存在、没有文档的更改，因为未来维护者更难审计。",
						"如果同时服务 www 和 apex 域名，需要验证两者。",
						"检查重定向不会从最终响应中移除重要响应头。"
					]
				},
				{
					heading: "CORS 应该有明确意图",
					paragraphs: ["Access-Control-Allow-Origin: * 经常被无理由复制到站点中。对于普通网页，宽泛 CORS 通常不会帮助访客；如果未来在同一策略下增加端点，还可能让意外数据暴露更容易发生。"]
				},
				{
					heading: "应该自动化什么",
					bullets: [
						"拒绝静态 header 配置中 wildcard CORS 的测试。",
						"发布 sitemap 和 robots 文件的 build 步骤。",
						"确认关键页面可渲染且 metadata 存在的 preview 检查。",
						"部署后面向生产域名的 live-response 检查。"
					]
				}
			],
			references: [{
				label: "Cloudflare Pages headers 文档",
				url: "https://developers.cloudflare.com/pages/configuration/headers/"
			}, {
				label: "MDN HTTP 安全响应头概览",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
			}]
		},
		es: {
			title: "Cabeceras de seguridad para Cloudflare Pages y sitios React",
			description: "Cómo usar cabeceras de seguridad, metadatos canónicos y verificación de respuestas para reducir riesgos habituales del navegador en despliegues React estáticos.",
			tags: [
				"Cloudflare",
				"React",
				"Cabeceras de seguridad",
				"Seguridad frontend"
			],
			summary: [
				"Las cabeceras de seguridad deben tratarse como configuración de despliegue, no como comentarios en el código.",
				"Cloudflare Pages permite reglas de cabeceras estáticas que se pueden probar antes del release.",
				"Wildcard CORS suele ser demasiado amplio para respuestas estáticas públicas salvo que exista un caso cross-origin específico."
			],
			sections: [
				{
					heading: "El conjunto base de cabeceras",
					paragraphs: ["Un sitio React endurecido debe definir explícitamente el comportamiento del navegador. La política exacta depende de la aplicación, pero la base suele incluir protección de tipo de contenido, protección contra clickjacking, control de referrer, permissions policy y una content security policy cuidadosamente elegida.", "En hosting estático es fácil olvidarlo porque la aplicación sigue renderizando sin cabeceras. El trabajo de seguridad debe verificarse en la capa de respuesta HTTP."]
				},
				{
					heading: "Consideraciones para Cloudflare Pages",
					bullets: [
						"Mantenga las reglas de cabeceras cerca del repositorio cuando sea posible para revisarlas junto con el código.",
						"Evite cambios solo en el dashboard si no están documentados, porque son más difíciles de auditar después.",
						"Verifique los dominios www y apex si ambos se sirven.",
						"Compruebe que las redirecciones no eliminan cabeceras importantes de la respuesta final."
					]
				},
				{
					heading: "CORS debe ser intencional",
					paragraphs: ["Access-Control-Allow-Origin: * se copia a menudo sin una razón. Para páginas web normales, CORS amplio normalmente no ayuda al visitante y puede facilitar exposiciones accidentales si se añaden endpoints futuros bajo la misma política."]
				},
				{
					heading: "Qué automatizar",
					bullets: [
						"Una prueba que rechace wildcard CORS en la configuración de cabeceras estáticas.",
						"Un paso de build que publique sitemap y robots.",
						"Una verificación de preview que confirme renderizado y metadata en páginas críticas.",
						"Una comprobación de respuesta viva tras el despliegue en dominios de producción."
					]
				}
			],
			references: [{
				label: "Documentación de cabeceras en Cloudflare Pages",
				url: "https://developers.cloudflare.com/pages/configuration/headers/"
			}, {
				label: "Resumen de cabeceras HTTP de seguridad en MDN",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
			}]
		},
		fr: {
			title: "En-têtes de sécurité pour Cloudflare Pages et sites React",
			description: "Comment utiliser les en-têtes de sécurité, les métadonnées canoniques et la vérification des réponses pour réduire les risques côté navigateur sur des déploiements React statiques.",
			tags: [
				"Cloudflare",
				"React",
				"En-têtes de sécurité",
				"Sécurité frontend"
			],
			summary: [
				"Les en-têtes de sécurité doivent être traités comme de la configuration de déploiement, pas comme de simples commentaires de code.",
				"Cloudflare Pages prend en charge des règles d’en-têtes statiques testables avant publication.",
				"Wildcard CORS est généralement trop large pour des réponses statiques publiques sans cas cross-origin précis."
			],
			sections: [
				{
					heading: "Le jeu d’en-têtes de base",
					paragraphs: ["Un site React durci doit définir explicitement le comportement du navigateur. La politique exacte dépend de l’application, mais la base inclut souvent la protection du type de contenu, la protection contre le clickjacking, le contrôle referrer, permissions policy et une content security policy soigneusement choisie.", "Les hébergeurs statiques font oublier ce point, car l’application rend quand même sans en-têtes. Le travail de sécurité doit être vérifié au niveau de la réponse HTTP."]
				},
				{
					heading: "Points d’attention Cloudflare Pages",
					bullets: [
						"Gardez les règles d’en-têtes près du dépôt lorsque possible afin que les changements soient revus avec le code.",
						"Évitez les changements uniquement dans le dashboard sans documentation, car ils sont plus difficiles à auditer ensuite.",
						"Vérifiez les domaines www et apex si les deux sont servis.",
						"Contrôlez que les redirections ne retirent pas les en-têtes importants de la réponse finale."
					]
				},
				{
					heading: "CORS doit être intentionnel",
					paragraphs: ["Access-Control-Allow-Origin: * est souvent copié sans raison. Pour des pages web normales, un CORS large n’aide généralement pas les visiteurs et peut faciliter une exposition accidentelle si de futurs endpoints sont ajoutés sous la même politique."]
				},
				{
					heading: "Ce qu’il faut automatiser",
					bullets: [
						"Un test qui refuse wildcard CORS dans la configuration d’en-têtes statiques.",
						"Une étape de build qui publie sitemap et robots.",
						"Un contrôle preview confirmant que les pages critiques rendent et que les métadonnées existent.",
						"Un contrôle de réponse live après déploiement pour les domaines de production."
					]
				}
			],
			references: [{
				label: "Documentation Cloudflare Pages sur les en-têtes",
				url: "https://developers.cloudflare.com/pages/configuration/headers/"
			}, {
				label: "Vue d’ensemble MDN des en-têtes HTTP de sécurité",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
			}]
		},
		ko: {
			title: "Cloudflare Pages와 React 사이트를 위한 보안 헤더",
			description: "정적 React 배포에서 일반적인 브라우저 측 위험을 줄이기 위해 보안 헤더, canonical metadata, 응답 검증을 사용하는 방법입니다.",
			tags: [
				"Cloudflare",
				"React",
				"보안 헤더",
				"프론트엔드 보안"
			],
			summary: [
				"보안 헤더는 코드 주석이 아니라 배포 설정으로 다뤄야 합니다.",
				"Cloudflare Pages는 릴리스 전에 테스트할 수 있는 정적 헤더 규칙을 지원합니다.",
				"명확한 cross-origin 사용 사례가 없다면 wildcard CORS는 공개 정적 응답에 대체로 지나치게 넓습니다."
			],
			sections: [
				{
					heading: "기본 헤더 세트",
					paragraphs: ["하드닝된 React 사이트는 브라우저 동작을 명시적으로 설정해야 합니다. 정확한 정책은 앱에 따라 다르지만 보통 content type 보호, clickjacking 보호, referrer 제어, permissions policy, 신중하게 선택한 content security policy가 포함됩니다.", "정적 호스팅에서는 헤더가 없어도 앱이 렌더링되기 때문에 이를 놓치기 쉽습니다. 보안 작업은 HTTP 응답 계층에서 검증해야 합니다."]
				},
				{
					heading: "Cloudflare Pages 고려사항",
					bullets: [
						"가능하면 헤더 규칙을 저장소 가까이에 두어 코드와 함께 리뷰되도록 합니다.",
						"문서화되지 않은 dashboard 전용 변경은 향후 유지보수자가 감사하기 어렵기 때문에 피합니다.",
						"www와 apex 도메인을 모두 제공한다면 둘 다 검증합니다.",
						"redirect가 최종 응답에서 중요한 헤더를 제거하지 않는지 확인합니다."
					]
				},
				{
					heading: "CORS는 의도적으로 설정해야 합니다",
					paragraphs: ["Access-Control-Allow-Origin: *는 이유 없이 사이트에 복사되는 경우가 많습니다. 일반 웹 페이지에서 넓은 CORS는 보통 방문자에게 도움이 되지 않으며, 같은 정책 아래 미래 endpoint가 추가될 경우 우발적인 데이터 노출을 쉽게 만들 수 있습니다."]
				},
				{
					heading: "자동화할 항목",
					bullets: [
						"정적 헤더 설정에서 wildcard CORS를 거부하는 테스트.",
						"sitemap과 robots 파일을 게시하는 build 단계.",
						"중요 페이지가 렌더링되고 metadata가 존재하는지 확인하는 preview 검사.",
						"배포 후 production 도메인에 대한 live-response 검사."
					]
				}
			],
			references: [{
				label: "Cloudflare Pages 헤더 문서",
				url: "https://developers.cloudflare.com/pages/configuration/headers/"
			}, {
				label: "MDN HTTP 보안 헤더 개요",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
			}]
		}
	},
	"vulnerability-disclosure-security-txt-website": {
		tr: {
			title: "Şirket Web Siteleri için Vulnerability Disclosure ve security.txt",
			description: "Güvenilir bir güvenlik iletişim yolu isteyen küçük şirketler için pratik security.txt ve zafiyet bildirim iş akışı.",
			tags: [
				"Zafiyet Bildirimi",
				"security.txt",
				"Güven"
			],
			summary: [
				"security.txt, araştırmacıların güvenlik iletişimini bulması için öngörülebilir bir yer sağlar.",
				"Bu iletişimin arkasındaki posta kutusu izlenmeli ve içeride doğru kişilere yönlendirilmelidir.",
				"Kamuya açık bir politika, olay yaşanmadan önce belirsizliği azaltır."
			],
			sections: [
				{
					heading: "security.txt neyi çözer",
					paragraphs: ["Araştırmacılar ve müşteriler güvenlik sorunlarının iletişim formuna mı, destek posta kutusuna mı yoksa sosyal medya mesajına mı gönderileceğini tahmin etmek zorunda kalmamalıdır. security.txt dosyası, zafiyet bildirimleri için standart bir yol oluşturur.", "Dosya küçüktür; ancak gerçek bir iletişim adresi, canonical URL, policy URL ve tercih edilen dil içerdiğinde operasyonel olgunluk sinyali verir."]
				},
				{
					heading: "Minimum pratik kurulum",
					bullets: [
						"Canonical domain üzerinde /.well-known/security.txt yayınlayın.",
						"security@example.com gibi izlenen bir güvenlik posta kutusu kullanın.",
						"Bir zafiyet bildirim politikasına veya güvenlik sayfasına bağlantı verin.",
						"Support ve contact ekiplerinin güvenlik raporlarını nereye ileteceğini bildiğinden emin olun."
					]
				},
				{
					heading: "Yanıt iş akışı",
					paragraphs: ["Web sitesi yalnızca giriş noktasıdır. Şirket seviyesinde kurulum ayrıca bir yanıt sahibi, severity triage, kanıt toplama, fix takibi ve geçerli raporları kabul etmek için kısa bir iletişim şablonu gerektirir."]
				},
				{
					heading: "Yaygın hatalar",
					bullets: [
						"Kimsenin izlemediği bir güvenlik posta kutusu yayınlamak.",
						"Şirket aliası yerine kişisel e-posta adresi kullanmak.",
						"Alan adı geçişinden sonra canonical URL’yi güncellemeyi unutmak.",
						"Disclosure yönetimini operasyonel bir süreç yerine yalnızca hukuki sayfa olarak görmek."
					]
				}
			],
			references: [{
				label: "RFC 9116 security.txt",
				url: "https://www.rfc-editor.org/rfc/rfc9116"
			}]
		},
		de: {
			title: "Vulnerability Disclosure und security.txt für Unternehmenswebsites",
			description: "Ein praktischer security.txt- und Vulnerability-Disclosure-Workflow für kleine Unternehmen, die einen glaubwürdigen Security-Kontaktweg brauchen.",
			tags: [
				"Vulnerability Disclosure",
				"security.txt",
				"Vertrauen"
			],
			summary: [
				"security.txt gibt Forschern einen vorhersehbaren Ort für den Security-Kontakt.",
				"Die Mailbox hinter diesem Kontakt muss überwacht und intern richtig geroutet werden.",
				"Eine öffentliche Policy reduziert Unklarheiten, bevor ein Incident passiert."
			],
			sections: [
				{
					heading: "Was security.txt löst",
					paragraphs: ["Forscher und Kunden sollten nicht raten müssen, ob Security-Themen in ein Kontaktformular, ein Support-Postfach oder eine Social-Media-Nachricht gehören. Eine security.txt-Datei schafft einen Standardpfad für Vulnerability Reports.", "Die Datei ist klein, signalisiert aber operative Reife, wenn sie einen echten Kontakt, eine kanonische URL, eine Policy-URL und bevorzugte Sprache enthält."]
				},
				{
					heading: "Praktisches Minimum",
					bullets: [
						"Veröffentlichen Sie /.well-known/security.txt auf der kanonischen Domain.",
						"Nutzen Sie eine überwachte Security-Mailbox wie security@example.com.",
						"Verlinken Sie eine Vulnerability-Disclosure-Policy oder Security-Seite.",
						"Stellen Sie sicher, dass Support- und Contact-Teams wissen, wohin Security Reports weitergeleitet werden."
					]
				},
				{
					heading: "Response-Workflow",
					paragraphs: ["Die Website ist nur der Einstiegspunkt. Ein Setup auf Unternehmensniveau braucht zusätzlich einen Response Owner, Severity Triage, Evidence Capture, Fix Tracking und ein kurzes Kommunikationstemplate zur Bestätigung valider Reports."]
				},
				{
					heading: "Häufige Fehler",
					bullets: [
						"Eine Security-Mailbox veröffentlichen, die niemand überwacht.",
						"Eine persönliche E-Mail-Adresse statt eines Unternehmensalias verwenden.",
						"Nach einer Domain-Migration die kanonische URL nicht aktualisieren.",
						"Disclosure Handling als reine Rechtsseite statt als operativen Workflow behandeln."
					]
				}
			],
			references: [{
				label: "RFC 9116 security.txt",
				url: "https://www.rfc-editor.org/rfc/rfc9116"
			}]
		},
		ja: {
			title: "企業サイト向け Vulnerability Disclosure と security.txt",
			description: "信頼できるセキュリティ連絡経路を持ちたい小規模企業のための、実践的な security.txt と脆弱性報告ワークフロー。",
			tags: [
				"脆弱性開示",
				"security.txt",
				"信頼"
			],
			summary: [
				"security.txt は、研究者がセキュリティ連絡先を探すための予測可能な場所を提供します。",
				"その連絡先の背後にあるメールボックスは監視され、社内で適切にルーティングされる必要があります。",
				"公開ポリシーは、インシデントが起きる前に混乱を減らします。"
			],
			sections: [
				{
					heading: "security.txt が解決すること",
					paragraphs: ["研究者や顧客が、セキュリティ問題を問い合わせフォーム、サポート inbox、SNS メッセージのどこに送るべきか推測する必要はありません。security.txt は脆弱性報告の標準的な経路を作ります。", "ファイル自体は小さいものですが、実在する連絡先、canonical URL、policy URL、優先言語を含むことで運用成熟度を示します。"]
				},
				{
					heading: "実務上の最小構成",
					bullets: [
						"canonical ドメインで /.well-known/security.txt を公開します。",
						"security@example.com のような監視対象の security メールボックスを使います。",
						"脆弱性開示ポリシーまたは security ページへリンクします。",
						"support と contact の担当者が security report の転送先を理解していることを確認します。"
					]
				},
				{
					heading: "対応ワークフロー",
					paragraphs: ["Web サイトは入口にすぎません。企業レベルの構成には、対応責任者、severity triage、証拠の保存、修正追跡、有効な報告を受領したことを伝える短いテンプレートも必要です。"]
				},
				{
					heading: "よくある失敗",
					bullets: [
						"誰も監視していない security メールボックスを公開する。",
						"会社 alias ではなく個人メールアドレスを使う。",
						"ドメイン移行後に canonical URL を更新し忘れる。",
						"開示対応を運用ワークフローではなく法務ページだけとして扱う。"
					]
				}
			],
			references: [{
				label: "RFC 9116 security.txt",
				url: "https://www.rfc-editor.org/rfc/rfc9116"
			}]
		},
		"zh-CN": {
			title: "公司网站的漏洞披露与 security.txt",
			description: "面向希望建立可信安全联系路径的小公司，提供实用的 security.txt 与漏洞披露工作流。",
			tags: [
				"漏洞披露",
				"security.txt",
				"信任"
			],
			summary: [
				"security.txt 为研究人员提供一个可预测的位置来查找安全联系信息。",
				"该联系地址背后的邮箱必须被监控，并在内部正确流转。",
				"公开政策可以在事件发生前减少混乱。"
			],
			sections: [
				{
					heading: "security.txt 解决什么问题",
					paragraphs: ["研究人员和客户不应该猜测安全问题应发送到联系表单、支持邮箱还是社交媒体消息。security.txt 文件为漏洞报告创建标准路径。", "文件很小，但如果包含真实联系人、canonical URL、政策 URL 和首选语言，就能传递运营成熟度信号。"]
				},
				{
					heading: "最低实用配置",
					bullets: [
						"在 canonical 域名上发布 /.well-known/security.txt。",
						"使用受监控的安全邮箱，例如 security@example.com。",
						"链接到漏洞披露政策或安全页面。",
						"确保 support 和 contact 团队知道将安全报告转发到哪里。"
					]
				},
				{
					heading: "响应工作流",
					paragraphs: ["网站只是入口。公司级配置还需要响应负责人、严重程度分级、证据记录、修复跟踪，以及用于确认有效报告的简短沟通模板。"]
				},
				{
					heading: "常见错误",
					bullets: [
						"发布一个无人监控的安全邮箱。",
						"使用个人邮箱而不是公司别名。",
						"域名迁移后忘记更新 canonical URL。",
						"把披露处理当成单纯法律页面，而不是运营工作流。"
					]
				}
			],
			references: [{
				label: "RFC 9116 security.txt",
				url: "https://www.rfc-editor.org/rfc/rfc9116"
			}]
		},
		es: {
			title: "Divulgación de vulnerabilidades y security.txt para sitios de empresa",
			description: "Un flujo práctico de security.txt y divulgación de vulnerabilidades para empresas pequeñas que quieren una vía de contacto de seguridad creíble.",
			tags: [
				"Divulgación de vulnerabilidades",
				"security.txt",
				"Confianza"
			],
			summary: [
				"security.txt da a los investigadores un lugar predecible para encontrar un contacto de seguridad.",
				"El buzón detrás de ese contacto debe monitorizarse y enrutarse internamente.",
				"Una política pública reduce la confusión antes de que ocurra un incidente."
			],
			sections: [
				{
					heading: "Qué resuelve security.txt",
					paragraphs: ["Investigadores y clientes no deberían adivinar si un problema de seguridad pertenece al formulario de contacto, al buzón de soporte o a un mensaje en redes sociales. Un archivo security.txt crea una ruta estándar para reportar vulnerabilidades.", "El archivo es pequeño, pero señala madurez operativa cuando incluye contacto real, URL canónica, URL de política e idioma preferido."]
				},
				{
					heading: "Configuración mínima práctica",
					bullets: [
						"Publique /.well-known/security.txt en el dominio canónico.",
						"Use un buzón de seguridad monitorizado, como security@example.com.",
						"Enlace a una política de divulgación de vulnerabilidades o página de seguridad.",
						"Asegúrese de que soporte y contacto sepan dónde reenviar reportes de seguridad."
					]
				},
				{
					heading: "Flujo de respuesta",
					paragraphs: ["El sitio web es solo el punto de entrada. Una configuración de nivel empresa también necesita responsable de respuesta, triage de severidad, captura de evidencias, seguimiento de correcciones y una plantilla breve para acusar recibo de reportes válidos."]
				},
				{
					heading: "Errores comunes",
					bullets: [
						"Publicar un buzón de seguridad que nadie monitoriza.",
						"Usar una dirección personal en lugar de un alias de empresa.",
						"Olvidar actualizar la URL canónica tras una migración de dominio.",
						"Tratar la divulgación como una página legal solamente, no como un flujo operativo."
					]
				}
			],
			references: [{
				label: "RFC 9116 security.txt",
				url: "https://www.rfc-editor.org/rfc/rfc9116"
			}]
		},
		fr: {
			title: "Divulgation de vulnérabilités et security.txt pour sites d’entreprise",
			description: "Un workflow pratique security.txt et divulgation de vulnérabilités pour petites entreprises qui veulent un chemin de contact sécurité crédible.",
			tags: [
				"Divulgation de vulnérabilités",
				"security.txt",
				"Confiance"
			],
			summary: [
				"security.txt donne aux chercheurs un endroit prévisible pour trouver un contact sécurité.",
				"La boîte derrière ce contact doit être surveillée et routée en interne.",
				"Une politique publique réduit la confusion avant qu’un incident ne survienne."
			],
			sections: [
				{
					heading: "Ce que security.txt résout",
					paragraphs: ["Chercheurs et clients ne devraient pas deviner si un problème sécurité doit aller dans un formulaire de contact, une boîte support ou un message social. Un fichier security.txt crée un chemin standard pour signaler les vulnérabilités.", "Le fichier est petit, mais il signale une maturité opérationnelle lorsqu’il contient un vrai contact, une URL canonique, une URL de politique et une langue préférée."]
				},
				{
					heading: "Configuration minimale pratique",
					bullets: [
						"Publiez /.well-known/security.txt sur le domaine canonique.",
						"Utilisez une boîte sécurité surveillée, par exemple security@example.com.",
						"Liez une politique de divulgation de vulnérabilités ou une page sécurité.",
						"Assurez-vous que les équipes support et contact savent où transférer les rapports sécurité."
					]
				},
				{
					heading: "Workflow de réponse",
					paragraphs: ["Le site web n’est que le point d’entrée. Une configuration de niveau entreprise nécessite aussi un responsable de réponse, un triage de sévérité, une capture des preuves, un suivi des corrections et un court modèle d’accusé de réception pour les rapports valides."]
				},
				{
					heading: "Erreurs fréquentes",
					bullets: [
						"Publier une boîte sécurité que personne ne surveille.",
						"Utiliser une adresse personnelle au lieu d’un alias d’entreprise.",
						"Oublier de mettre à jour l’URL canonique après une migration de domaine.",
						"Traiter la divulgation comme une simple page juridique plutôt que comme un workflow opérationnel."
					]
				}
			],
			references: [{
				label: "RFC 9116 security.txt",
				url: "https://www.rfc-editor.org/rfc/rfc9116"
			}]
		},
		ko: {
			title: "회사 웹사이트를 위한 취약점 공개와 security.txt",
			description: "신뢰할 수 있는 보안 연락 경로가 필요한 소규모 회사를 위한 실용적인 security.txt와 취약점 공개 워크플로입니다.",
			tags: [
				"취약점 공개",
				"security.txt",
				"신뢰"
			],
			summary: [
				"security.txt는 연구자가 보안 연락처를 찾을 수 있는 예측 가능한 위치를 제공합니다.",
				"그 연락처 뒤의 메일함은 모니터링되고 내부적으로 라우팅되어야 합니다.",
				"공개 정책은 사고가 발생하기 전에 혼란을 줄입니다."
			],
			sections: [
				{
					heading: "security.txt가 해결하는 것",
					paragraphs: ["연구자와 고객은 보안 문제가 연락 양식, 지원 inbox, 소셜 메시지 중 어디로 가야 하는지 추측할 필요가 없어야 합니다. security.txt 파일은 취약점 보고를 위한 표준 경로를 만듭니다.", "파일은 작지만 실제 연락처, canonical URL, 정책 URL, 선호 언어를 포함하면 운영 성숙도를 보여줍니다."]
				},
				{
					heading: "최소 실무 구성",
					bullets: [
						"canonical 도메인에 /.well-known/security.txt를 게시합니다.",
						"security@example.com 같은 모니터링되는 보안 메일함을 사용합니다.",
						"취약점 공개 정책 또는 보안 페이지로 연결합니다.",
						"support와 contact 팀이 보안 보고서를 어디로 전달해야 하는지 알고 있는지 확인합니다."
					]
				},
				{
					heading: "응답 워크플로",
					paragraphs: ["웹사이트는 진입점일 뿐입니다. 회사급 구성에는 응답 담당자, severity triage, 증거 캡처, 수정 추적, 유효한 보고서를 확인하는 짧은 커뮤니케이션 템플릿도 필요합니다."]
				},
				{
					heading: "흔한 실수",
					bullets: [
						"아무도 모니터링하지 않는 보안 메일함을 게시하는 것.",
						"회사 alias 대신 개인 이메일 주소를 사용하는 것.",
						"도메인 이전 후 canonical URL 업데이트를 잊는 것.",
						"공개 처리를 운영 워크플로가 아니라 법률 페이지로만 다루는 것."
					]
				}
			],
			references: [{
				label: "RFC 9116 security.txt",
				url: "https://www.rfc-editor.org/rfc/rfc9116"
			}]
		}
	},
	"react-contact-form-spam-abuse-hardening": {
		tr: {
			title: "React İletişim Formlarını Spam ve Kötüye Kullanıma Karşı Güçlendirme",
			description: "Bir React iletişim sayfasını validation, bot kontrolleri, yönlendirme disiplini ve daha güvenli e-posta işleme ile koruma yöntemi.",
			tags: [
				"React",
				"İletişim Formları",
				"Abuse Kontrolleri",
				"E-posta"
			],
			summary: [
				"İletişim formları herkese açık yazma endpointleridir ve abuse hedefi olarak ele alınmalıdır.",
				"Bot kontrolleri yardımcı olur; ancak validation, rate limit ve hedef yönlendirme hâlâ önemlidir.",
				"Operasyonel posta kutuları satış, destek, gizlilik, hukuk ve güvenlik mesajlarını ayırmayı kolaylaştırır."
			],
			sections: [
				{
					heading: "Risk yüzeyi",
					paragraphs: ["Bir iletişim sayfası basit görünür; ancak çoğu zaman saldırganların yazabildiği ilk herkese açık endpoint olur. Spam, phishing payloadları, aşırı büyük gönderimler ve otomatik probelar aynı iş akışını hedefleyebilir.", "Frontend kaliteyi artırabilir ve gürültüyü azaltabilir; fakat gerçek mail-sending endpointleri için server-side validation ve rate limiting gereklidir."]
				},
				{
					heading: "Frontend kontrolleri",
					bullets: [
						"Gönderimden önce zorunlu alanları ve beklenen uzunlukları doğrulayın.",
						"Provider secretlarını veya private API keyleri client-side kodda açığa çıkarmayın.",
						"Kullanıcıların tekrar tekrar göndermemesi için açık başarı ve hata durumları gösterin.",
						"Sayfa ağırlığını azaltmak için bot korumasını yalnızca gerekli yerde yükleyin."
					]
				},
				{
					heading: "Backend ve e-posta kontrolleri",
					bullets: [
						"Platformunuz izin verdiğinde IP, fingerprint veya session bazlı rate limit uygulayın.",
						"E-posta oluşturmadan önce payloadları normalize edin ve doğrulayın.",
						"Mesajları kişisel adresler yerine role-based posta kutularına yönlendirin.",
						"Gereksiz kişisel veri toplamadan abuse incelemesine yetecek bağlamı loglayın."
					]
				},
				{
					heading: "Profesyonel yönlendirme",
					paragraphs: ["Şirket aliasları iş akışını işletmeyi kolaylaştırır. Support soruları support’a, zafiyet bildirimleri security’ye, privacy talepleri privacy’ye, legal talepler legal’a ve satış leadleri sales’e gidebilir. Bu ayrım public site üzerinde daha güvenilir de görünür."]
				}
			],
			references: [{
				label: "OWASP otomatik tehditler özeti",
				url: "https://owasp.org/www-project-automated-threats-to-web-applications/"
			}]
		},
		de: {
			title: "React-Kontaktformulare gegen Spam und Missbrauch härten",
			description: "Wie eine React-Kontaktseite mit Validierung, Bot-Kontrollen, Routing-Disziplin und sichererem E-Mail-Handling geschützt wird.",
			tags: [
				"React",
				"Kontaktformulare",
				"Abuse Controls",
				"E-Mail"
			],
			summary: [
				"Kontaktformulare sind öffentliche Schreib-Endpunkte und sollten als Abuse-Ziele behandelt werden.",
				"Bot-Kontrollen helfen, aber Validierung, Rate Limits und Ziel-Routing bleiben wichtig.",
				"Operative Mailboxen erleichtern die Trennung von Sales-, Support-, Privacy-, Legal- und Security-Nachrichten."
			],
			sections: [
				{
					heading: "Die Risikofläche",
					paragraphs: ["Eine Kontaktseite wirkt einfach, wird aber oft der erste öffentliche Endpunkt, an den Angreifer schreiben können. Spam, Phishing-Payloads, übergroße Einreichungen und automatisierte Probes können denselben Workflow angreifen.", "Das Frontend kann Qualität erhöhen und Rauschen reduzieren, aber serverseitige Validierung und Rate Limiting bleiben für jeden echten Mail-Sending-Endpunkt notwendig."]
				},
				{
					heading: "Frontend-Kontrollen",
					bullets: [
						"Validieren Sie Pflichtfelder und erwartete Längen vor dem Absenden.",
						"Legen Sie keine Provider-Secrets oder privaten API Keys im clientseitigen Code offen.",
						"Nutzen Sie klare Erfolgs- und Fehlerzustände, damit Nutzer nicht mehrfach senden.",
						"Laden Sie Bot-Schutz nur dort, wo er nötig ist, um Seitengewicht zu reduzieren."
					]
				},
				{
					heading: "Backend- und E-Mail-Kontrollen",
					bullets: [
						"Setzen Sie Rate Limits nach IP, Fingerprint oder Session, wo die Plattform es erlaubt.",
						"Normalisieren und validieren Sie Payloads, bevor E-Mails zusammengesetzt werden.",
						"Routen Sie Nachrichten an rollenbasierte Mailboxen statt an persönliche Adressen.",
						"Loggen Sie genug Kontext für Abuse-Untersuchungen, ohne unnötige personenbezogene Daten zu sammeln."
					]
				},
				{
					heading: "Professionelles Routing",
					paragraphs: ["Unternehmensaliasse machen den Workflow leichter betreibbar. Support-Fragen gehen an support, Vulnerability Reports an security, Privacy-Anfragen an privacy, rechtliche Anfragen an legal und Sales Leads an sales. Diese Trennung wirkt auch auf der öffentlichen Website glaubwürdiger."]
				}
			],
			references: [{
				label: "OWASP Überblick zu automatisierten Bedrohungen",
				url: "https://owasp.org/www-project-automated-threats-to-web-applications/"
			}]
		},
		ja: {
			title: "React 問い合わせフォームをスパムと悪用から守る",
			description: "validation、bot 制御、routing discipline、より安全なメール処理で React の問い合わせページを保護する方法。",
			tags: [
				"React",
				"問い合わせフォーム",
				"悪用対策",
				"メール"
			],
			summary: [
				"問い合わせフォームは公開された書き込み endpoint であり、悪用対象として扱うべきです。",
				"bot 制御は役立ちますが、validation、rate limit、送信先 routing も重要です。",
				"運用メールボックスにより、sales、support、privacy、legal、security のメッセージを分離しやすくなります。"
			],
			sections: [
				{
					heading: "リスク面",
					paragraphs: ["問い合わせページは単純に見えますが、攻撃者が書き込める最初の公開 endpoint になることがよくあります。spam、phishing payload、過大な送信、自動 probe が同じ workflow を標的にできます。", "Frontend は品質を上げノイズを減らせますが、実際にメールを送る endpoint には server-side validation と rate limiting が必要です。"]
				},
				{
					heading: "Frontend の制御",
					bullets: [
						"送信前に必須項目と想定される長さを検証します。",
						"provider secret や private API key を client-side code に露出しません。",
						"ユーザーが繰り返し送信しないよう、明確な成功・失敗状態を表示します。",
						"ページ重量を抑えるため、bot protection は必要な場所だけで読み込みます。"
					]
				},
				{
					heading: "Backend とメールの制御",
					bullets: [
						"プラットフォームが許す範囲で IP、fingerprint、session による rate limit を設定します。",
						"メールを組み立てる前に payload を normalize し、検証します。",
						"個人アドレスではなく role-based mailbox にメッセージを route します。",
						"不要な個人データを集めずに、悪用調査に必要な文脈だけを log します。"
					]
				},
				{
					heading: "プロフェッショナルな routing",
					paragraphs: ["会社 alias は workflow を運用しやすくします。support 質問は support、脆弱性報告は security、privacy 要求は privacy、legal 要求は legal、sales lead は sales に送れます。この分離は公開サイト上でも信頼性を高めます。"]
				}
			],
			references: [{
				label: "OWASP 自動化された脅威の概要",
				url: "https://owasp.org/www-project-automated-threats-to-web-applications/"
			}]
		},
		"zh-CN": {
			title: "加固 React 联系表单以抵御垃圾信息与滥用",
			description: "如何通过校验、机器人控制、路由纪律和更安全的邮件处理来保护 React 联系页面。",
			tags: [
				"React",
				"联系表单",
				"滥用控制",
				"邮件"
			],
			summary: [
				"联系表单是公开写入端点，应被视为滥用目标。",
				"机器人控制有帮助，但校验、限流和目标路由仍然重要。",
				"运营邮箱更容易把销售、支持、隐私、法律和安全消息分开处理。"
			],
			sections: [
				{
					heading: "风险面",
					paragraphs: ["联系页面看起来简单，但它经常成为攻击者可以写入的第一个公开端点。垃圾信息、钓鱼 payload、超大提交和自动探测都可能针对同一工作流。", "前端可以提高质量并减少噪声，但任何真正发送邮件的端点仍然需要服务端校验和限流。"]
				},
				{
					heading: "前端控制",
					bullets: [
						"提交前校验必填字段和预期长度。",
						"不要在客户端代码中暴露服务商 secret 或私有 API key。",
						"提供清晰的成功和失败状态，避免用户重复提交。",
						"只在需要的地方加载机器人防护，以降低页面重量。"
					]
				},
				{
					heading: "后端与邮件控制",
					bullets: [
						"在平台允许的情况下，按 IP、fingerprint 或 session 进行限流。",
						"在组合邮件前对 payload 进行规范化和校验。",
						"将消息路由到基于角色的邮箱，而不是个人地址。",
						"记录足以调查滥用的上下文，同时避免收集不必要的个人数据。"
					]
				},
				{
					heading: "专业化路由",
					paragraphs: ["公司别名让工作流更容易运营。支持问题进入 support，漏洞报告进入 security，隐私请求进入 privacy，法律请求进入 legal，销售线索进入 sales。这种分离在公开网站上也更可信。"]
				}
			],
			references: [{
				label: "OWASP 自动化威胁概览",
				url: "https://owasp.org/www-project-automated-threats-to-web-applications/"
			}]
		},
		es: {
			title: "Endurecer formularios de contacto React contra spam y abuso",
			description: "Cómo proteger una página de contacto React con validación, controles de bot, disciplina de routing y manejo de correo más seguro.",
			tags: [
				"React",
				"Formularios de contacto",
				"Controles antiabuso",
				"Correo"
			],
			summary: [
				"Los formularios de contacto son endpoints públicos de escritura y deben tratarse como objetivos de abuso.",
				"Los controles de bot ayudan, pero validación, rate limits y routing de destino siguen importando.",
				"Los buzones operativos facilitan separar mensajes de ventas, soporte, privacidad, legal y seguridad."
			],
			sections: [
				{
					heading: "La superficie de riesgo",
					paragraphs: ["Una página de contacto parece simple, pero a menudo se convierte en el primer endpoint público al que pueden escribir atacantes. Spam, payloads de phishing, envíos sobredimensionados y probes automatizados pueden apuntar al mismo flujo.", "El frontend puede mejorar calidad y reducir ruido, pero la validación server-side y el rate limiting siguen siendo necesarios para cualquier endpoint real de envío de correo."]
				},
				{
					heading: "Controles frontend",
					bullets: [
						"Valide campos obligatorios y longitudes esperadas antes del envío.",
						"No exponga secretos de proveedor ni API keys privadas en código cliente.",
						"Use estados claros de éxito y error para que los usuarios no envíen repetidamente.",
						"Cargue protección contra bots solo donde se necesita para reducir peso de página."
					]
				},
				{
					heading: "Controles backend y de correo",
					bullets: [
						"Aplique rate limits por IP, fingerprint o sesión donde la plataforma lo permita.",
						"Normalice y valide payloads antes de componer correos.",
						"Enrute mensajes a buzones basados en roles en lugar de direcciones personales.",
						"Registre contexto suficiente para investigar abuso sin recolectar datos personales innecesarios."
					]
				},
				{
					heading: "Routing profesional",
					paragraphs: ["Los alias de empresa facilitan operar el workflow. Preguntas de soporte van a support, reportes de vulnerabilidad a security, solicitudes de privacidad a privacy, legales a legal y leads comerciales a sales. Esa separación también se ve más creíble en el sitio público."]
				}
			],
			references: [{
				label: "Resumen OWASP de amenazas automatizadas",
				url: "https://owasp.org/www-project-automated-threats-to-web-applications/"
			}]
		},
		fr: {
			title: "Durcir les formulaires de contact React contre le spam et les abus",
			description: "Comment protéger une page de contact React avec validation, contrôles anti-bot, discipline de routage et traitement e-mail plus sûr.",
			tags: [
				"React",
				"Formulaires de contact",
				"Contrôles anti-abus",
				"E-mail"
			],
			summary: [
				"Les formulaires de contact sont des endpoints publics en écriture et doivent être traités comme des cibles d’abus.",
				"Les contrôles anti-bot aident, mais validation, rate limits et routage de destination restent essentiels.",
				"Les boîtes opérationnelles facilitent la séparation des messages sales, support, privacy, legal et security."
			],
			sections: [
				{
					heading: "La surface de risque",
					paragraphs: ["Une page de contact semble simple, mais elle devient souvent le premier endpoint public auquel des attaquants peuvent écrire. Spam, payloads de phishing, soumissions trop volumineuses et sondes automatisées peuvent cibler le même workflow.", "Le frontend peut améliorer la qualité et réduire le bruit, mais la validation côté serveur et le rate limiting restent nécessaires pour tout endpoint réel d’envoi d’e-mail."]
				},
				{
					heading: "Contrôles frontend",
					bullets: [
						"Validez les champs obligatoires et les longueurs attendues avant soumission.",
						"N’exposez pas de secrets fournisseur ni de clés API privées dans le code client.",
						"Utilisez des états de succès et d’échec clairs pour éviter les soumissions répétées.",
						"Chargez la protection anti-bot uniquement où elle est nécessaire afin de réduire le poids de page."
					]
				},
				{
					heading: "Contrôles backend et e-mail",
					bullets: [
						"Appliquez des rate limits par IP, fingerprint ou session lorsque la plateforme le permet.",
						"Normalisez et validez les payloads avant de composer l’e-mail.",
						"Routez les messages vers des boîtes par rôle plutôt que vers des adresses personnelles.",
						"Journalisez assez de contexte pour enquêter sur les abus sans collecter de données personnelles inutiles."
					]
				},
				{
					heading: "Routage professionnel",
					paragraphs: ["Les alias d’entreprise rendent le workflow plus exploitable. Les questions support vont à support, les rapports de vulnérabilité à security, les demandes privacy à privacy, les demandes legal à legal et les leads sales à sales. Cette séparation paraît aussi plus crédible sur le site public."]
				}
			],
			references: [{
				label: "Vue d’ensemble OWASP des menaces automatisées",
				url: "https://owasp.org/www-project-automated-threats-to-web-applications/"
			}]
		},
		ko: {
			title: "React 연락 양식을 스팸과 남용으로부터 하드닝하기",
			description: "validation, bot control, 라우팅 규율, 더 안전한 이메일 처리를 통해 React 연락 페이지를 보호하는 방법입니다.",
			tags: [
				"React",
				"연락 양식",
				"남용 방지",
				"이메일"
			],
			summary: [
				"연락 양식은 공개 쓰기 endpoint이며 남용 대상처럼 다뤄야 합니다.",
				"bot control은 도움이 되지만 validation, rate limit, 목적지 routing도 여전히 중요합니다.",
				"운영 메일함은 sales, support, privacy, legal, security 메시지를 분리하기 쉽게 만듭니다."
			],
			sections: [
				{
					heading: "위험 표면",
					paragraphs: ["연락 페이지는 단순해 보이지만 공격자가 쓸 수 있는 첫 공개 endpoint가 되는 경우가 많습니다. 스팸, phishing payload, 과도하게 큰 제출, 자동 probe가 같은 workflow를 겨냥할 수 있습니다.", "Frontend는 품질을 높이고 노이즈를 줄일 수 있지만 실제 메일 발송 endpoint에는 server-side validation과 rate limiting이 필요합니다."]
				},
				{
					heading: "Frontend 제어",
					bullets: [
						"제출 전에 필수 필드와 예상 길이를 검증합니다.",
						"provider secret이나 private API key를 client-side code에 노출하지 않습니다.",
						"사용자가 반복 제출하지 않도록 명확한 성공 및 실패 상태를 제공합니다.",
						"페이지 무게를 줄이기 위해 bot protection은 필요한 곳에서만 로드합니다."
					]
				},
				{
					heading: "Backend와 이메일 제어",
					bullets: [
						"플랫폼이 허용하는 경우 IP, fingerprint, session 기준으로 rate limit을 적용합니다.",
						"이메일을 구성하기 전에 payload를 정규화하고 검증합니다.",
						"개인 주소 대신 role-based mailbox로 메시지를 라우팅합니다.",
						"불필요한 개인정보를 수집하지 않으면서 남용 조사에 충분한 맥락을 로그로 남깁니다."
					]
				},
				{
					heading: "전문적인 라우팅",
					paragraphs: ["회사 alias는 workflow 운영을 쉽게 만듭니다. support 질문은 support로, 취약점 보고서는 security로, privacy 요청은 privacy로, legal 요청은 legal로, sales lead는 sales로 보낼 수 있습니다. 이런 분리는 공개 사이트에서도 더 신뢰성 있게 보입니다."]
				}
			],
			references: [{
				label: "OWASP 자동화 위협 개요",
				url: "https://owasp.org/www-project-automated-threats-to-web-applications/"
			}]
		}
	},
	"ebpf-compatibility-testing-ci": {
		tr: {
			title: "Kernel Hassas Projeler için CI’da eBPF Uyumluluk Testi",
			description: "Uyumluluk raporları, tekrarlanabilir kontroller ve CI kanıtları kernel hassas eBPF çalışmalarını daha güvenle yayınlamaya nasıl yardımcı olur.",
			tags: [
				"eBPF",
				"CI",
				"Kernel Güvenliği",
				"Açık Kaynak"
			],
			summary: [
				"Kernel hassas araçların yalnızca başarılı local build’e değil, uyumluluk kanıtına ihtiyacı vardır.",
				"CI raporları verifier, helper ve kernel sürümü varsayımlarını incelemeyi kolaylaştırır.",
				"Kanıtı yayınlamak açık kaynak güvenlik projeleri için güveni artırır."
			],
			sections: [
				{
					heading: "Uyumluluk kanıtı neden önemlidir",
					paragraphs: ["eBPF programları kernel davranışına, helper availability’ye, verifier kısıtlarına ve runtime ortam detaylarına bağlıdır. Bir araç bir geliştirici makinesinde çalışıp başka bir kernel hattındaki kullanıcıda başarısız olabilir.", "Uyumluluk testi bu varsayımları görünür kılar. Ayrıca maintainers’ın release öncesi regresyonları yakalaması için bir yol sağlar."]
				},
				{
					heading: "Yararlı bir rapor neleri içermeli",
					bullets: [
						"Test edilen kernel sürümü ve mimari.",
						"Program yükleme durumu ve ilgili olduğunda verifier çıktısı.",
						"Helper, map ve feature varsayımları.",
						"Net pass, fail veya partial-support kararı.",
						"Sonucu üreten koda ve CI run’a bağlantılar."
					]
				},
				{
					heading: "CI entegrasyon paterni",
					paragraphs: ["CI job hem insan tarafından okunabilir bir rapor hem de makine tarafından okunabilir bir artifact üretmelidir. Web sitesi daha sonra özetlenmiş bir sürüm yayınlayabilir; böylece kullanıcılar ve contributor’lar raw workflow loglarına dalmadan projeyi inceleyebilir."]
				},
				{
					heading: "Güven faydası",
					paragraphs: ["Bir güvenlik mühendisliği şirketi için açık uyumluluk kanıtı iki iş yapar. Kullanıcıların aracın ortamlarına uyup uymadığını anlamasına yardımcı olur ve mühendislik iddialarının tekrarlanabilir kontrollerle desteklendiğini gösterir."]
				}
			],
			references: [{
				label: "Kernel eBPF dokümantasyonu",
				url: "https://docs.kernel.org/bpf/"
			}]
		},
		de: {
			title: "eBPF-Kompatibilitätstests in CI für kernelnahe Projekte",
			description: "Wie Kompatibilitätsberichte, wiederholbare Checks und CI-Evidence Teams helfen, kernelnahe eBPF-Arbeit mit mehr Vertrauen auszuliefern.",
			tags: [
				"eBPF",
				"CI",
				"Kernel-Sicherheit",
				"Open Source"
			],
			summary: [
				"Kernelnahe Tools brauchen Kompatibilitätsnachweise, nicht nur einen erfolgreichen lokalen Build.",
				"CI-Reports machen Verifier-, Helper- und Kernelversionsannahmen leichter reviewbar.",
				"Veröffentlichte Evidence stärkt Vertrauen in Open-Source-Sicherheitsprojekte."
			],
			sections: [
				{
					heading: "Warum Kompatibilitätsnachweise wichtig sind",
					paragraphs: ["eBPF-Programme hängen von Kernelverhalten, Helper-Verfügbarkeit, Verifier-Grenzen und Laufzeitdetails ab. Ein Tool kann auf einer Entwickler-Maschine funktionieren und bei Nutzern auf einer anderen Kernel-Linie trotzdem scheitern.", "Kompatibilitätstests machen diese Annahmen sichtbar. Sie geben Maintainers auch einen Weg, Regressionen vor einem Release zu erkennen."]
				},
				{
					heading: "Was ein nützlicher Report enthalten sollte",
					bullets: [
						"Kernelversion und Architektur unter Test.",
						"Program-Load-Status und Verifier-Ausgabe, wenn relevant.",
						"Annahmen zu Helpern, Maps und Features.",
						"Ein klares pass-, fail- oder partial-support-Ergebnis.",
						"Links zum Code und CI-Run, die das Ergebnis erzeugt haben."
					]
				},
				{
					heading: "CI-Integrationsmuster",
					paragraphs: ["Der CI-Job sollte einen menschenlesbaren Bericht und ein maschinenlesbares Artefakt erzeugen. Die Website kann anschließend eine zusammengefasste Version veröffentlichen, damit Nutzer und Beitragende das Projekt prüfen können, ohne rohe Workflow-Logs zu durchsuchen."]
				},
				{
					heading: "Vertrauensgewinn",
					paragraphs: ["Für ein Security-Engineering-Unternehmen erfüllt offene Kompatibilitäts-Evidence zwei Aufgaben. Sie hilft Nutzern zu entscheiden, ob ein Tool zu ihrer Umgebung passt, und zeigt, dass Engineering-Claims durch wiederholbare Checks gestützt werden."]
				}
			],
			references: [{
				label: "Kernel-eBPF-Dokumentation",
				url: "https://docs.kernel.org/bpf/"
			}]
		},
		ja: {
			title: "カーネル依存プロジェクト向け CI での eBPF 互換性テスト",
			description: "互換性レポート、再現可能なチェック、CI evidence が kernel-sensitive な eBPF 開発をより安心して出荷する助けになる理由。",
			tags: [
				"eBPF",
				"CI",
				"カーネルセキュリティ",
				"オープンソース"
			],
			summary: [
				"カーネル依存のツールには、ローカル build 成功だけでなく互換性 evidence が必要です。",
				"CI レポートは verifier、helper、kernel version の前提をレビューしやすくします。",
				"evidence を公開することで、オープンソースの security project への信頼が高まります。"
			],
			sections: [
				{
					heading: "互換性 evidence が重要な理由",
					paragraphs: ["eBPF program は kernel behavior、helper availability、verifier constraints、runtime environment の詳細に依存します。ある開発者のマシンでは動作しても、別の kernel line を使うユーザーでは失敗することがあります。", "互換性テストはこれらの前提を可視化します。また、maintainer が release 前に regression を捕捉する手段にもなります。"]
				},
				{
					heading: "有用なレポートに含めるべき内容",
					bullets: [
						"テスト対象の kernel version と architecture。",
						"program load status と、必要に応じた verifier output。",
						"helper、map、feature に関する前提。",
						"明確な pass、fail、または partial-support verdict。",
						"結果を生成した code と CI run へのリンク。"
					]
				},
				{
					heading: "CI 統合パターン",
					paragraphs: ["CI job は人間が読めるレポートと機械が読める artifact の両方を生成すべきです。Web サイトは要約版を公開でき、ユーザーや contributor は raw workflow log を掘らずにプロジェクトを確認できます。"]
				},
				{
					heading: "信頼面での効果",
					paragraphs: ["セキュリティエンジニアリング会社にとって、公開された互換性 evidence は二つの役割を持ちます。ユーザーが自分の環境に tool が合うか判断しやすくし、engineering claim が再現可能な check に支えられていることを示します。"]
				}
			],
			references: [{
				label: "Kernel eBPF ドキュメント",
				url: "https://docs.kernel.org/bpf/"
			}]
		},
		"zh-CN": {
			title: "面向内核敏感项目的 CI 中 eBPF 兼容性测试",
			description: "兼容性报告、可重复检查与 CI 证据如何帮助团队更有信心地交付内核敏感的 eBPF 工作。",
			tags: [
				"eBPF",
				"CI",
				"内核安全",
				"开源"
			],
			summary: [
				"内核敏感工具需要兼容性证据，而不只是一次成功的本地构建。",
				"CI 报告让 verifier、helper 和内核版本假设更容易审查。",
				"公开证据可以提升开源安全项目的信任度。"
			],
			sections: [
				{
					heading: "为什么兼容性证据很重要",
					paragraphs: ["eBPF 程序依赖内核行为、helper 可用性、verifier 约束和运行环境细节。一个工具可能在开发者机器上可用，却在另一条内核线的用户环境中失败。", "兼容性测试让这些假设可见，也给维护者提供了在发布前捕获回归的方式。"]
				},
				{
					heading: "有用报告应包含什么",
					bullets: [
						"测试中的内核版本和架构。",
						"程序加载状态，以及相关情况下的 verifier 输出。",
						"helper、map 和 feature 假设。",
						"清晰的 pass、fail 或 partial-support 结论。",
						"生成结果的代码和 CI run 链接。"
					]
				},
				{
					heading: "CI 集成模式",
					paragraphs: ["CI job 应生成面向人的可读报告和面向机器的 artifact。网站随后可以发布摘要版本，让用户和贡献者无需深入原始 workflow 日志也能检查项目。"]
				},
				{
					heading: "信任收益",
					paragraphs: ["对于安全工程公司，公开兼容性证据有两个作用。它帮助用户判断工具是否适合自己的环境，也证明工程主张有可重复检查作为支撑。"]
				}
			],
			references: [{
				label: "Kernel eBPF 文档",
				url: "https://docs.kernel.org/bpf/"
			}]
		},
		es: {
			title: "Pruebas de compatibilidad eBPF en CI para proyectos sensibles al kernel",
			description: "Cómo reportes de compatibilidad, checks repetibles y evidencia CI ayudan a publicar trabajo eBPF sensible al kernel con más confianza.",
			tags: [
				"eBPF",
				"CI",
				"Seguridad de kernel",
				"Open Source"
			],
			summary: [
				"Las herramientas sensibles al kernel necesitan evidencia de compatibilidad, no solo un build local exitoso.",
				"Los reportes CI hacen más revisables las suposiciones de verifier, helpers y versiones de kernel.",
				"Publicar la evidencia mejora la confianza en proyectos open source de seguridad."
			],
			sections: [
				{
					heading: "Por qué importa la evidencia de compatibilidad",
					paragraphs: ["Los programas eBPF dependen del comportamiento del kernel, disponibilidad de helpers, restricciones del verifier y detalles del entorno de ejecución. Una herramienta puede funcionar en la máquina de un desarrollador y fallar para usuarios en otra línea de kernel.", "Las pruebas de compatibilidad hacen visibles esas suposiciones. También dan a maintainers una forma de detectar regresiones antes de un release."]
				},
				{
					heading: "Qué debe incluir un reporte útil",
					bullets: [
						"Versión de kernel y arquitectura bajo prueba.",
						"Estado de carga del programa y salida del verifier cuando aplique.",
						"Suposiciones sobre helpers, maps y features.",
						"Un veredicto claro de pass, fail o partial-support.",
						"Enlaces al código y al CI run que produjo el resultado."
					]
				},
				{
					heading: "Patrón de integración CI",
					paragraphs: ["El job de CI debe generar un reporte legible para humanos y un artefacto legible por máquina. El sitio web puede publicar una versión resumida para que usuarios y contribuidores inspeccionen el proyecto sin bucear en logs crudos del workflow."]
				},
				{
					heading: "Beneficio de confianza",
					paragraphs: ["Para una empresa de ingeniería de seguridad, la evidencia abierta de compatibilidad cumple dos funciones. Ayuda a usuarios a decidir si una herramienta encaja en su entorno y demuestra que las afirmaciones de ingeniería están respaldadas por checks repetibles."]
				}
			],
			references: [{
				label: "Documentación eBPF del kernel",
				url: "https://docs.kernel.org/bpf/"
			}]
		},
		fr: {
			title: "Tests de compatibilité eBPF en CI pour projets sensibles au kernel",
			description: "Comment les rapports de compatibilité, contrôles répétables et preuves CI aident les équipes à livrer du travail eBPF sensible au kernel avec plus de confiance.",
			tags: [
				"eBPF",
				"CI",
				"Sécurité kernel",
				"Open Source"
			],
			summary: [
				"Les outils sensibles au kernel ont besoin de preuves de compatibilité, pas seulement d’un build local réussi.",
				"Les rapports CI rendent les hypothèses verifier, helpers et versions kernel plus faciles à revoir.",
				"Publier les preuves renforce la confiance dans les projets de sécurité open source."
			],
			sections: [
				{
					heading: "Pourquoi la preuve de compatibilité compte",
					paragraphs: ["Les programmes eBPF dépendent du comportement kernel, de la disponibilité des helpers, des contraintes du verifier et des détails runtime. Un outil peut fonctionner sur la machine d’un développeur et échouer chez des utilisateurs sur une autre ligne kernel.", "Les tests de compatibilité rendent ces hypothèses visibles. Ils donnent aussi aux maintainers un moyen de détecter les régressions avant release."]
				},
				{
					heading: "Ce qu’un rapport utile doit contenir",
					bullets: [
						"Version kernel et architecture testées.",
						"Statut de chargement du programme et sortie verifier lorsque pertinent.",
						"Hypothèses sur helpers, maps et features.",
						"Un verdict clair pass, fail ou partial-support.",
						"Liens vers le code et le CI run ayant produit le résultat."
					]
				},
				{
					heading: "Pattern d’intégration CI",
					paragraphs: ["Le job CI doit générer un rapport lisible par l’humain et un artefact lisible par machine. Le site peut ensuite publier une version résumée pour que utilisateurs et contributeurs inspectent le projet sans fouiller les logs bruts du workflow."]
				},
				{
					heading: "Bénéfice de confiance",
					paragraphs: ["Pour une entreprise d’ingénierie sécurité, une preuve ouverte de compatibilité a deux rôles. Elle aide les utilisateurs à savoir si un outil correspond à leur environnement et montre que les affirmations d’ingénierie reposent sur des contrôles répétables."]
				}
			],
			references: [{
				label: "Documentation eBPF du kernel",
				url: "https://docs.kernel.org/bpf/"
			}]
		},
		ko: {
			title: "커널 민감 프로젝트를 위한 CI의 eBPF 호환성 테스트",
			description: "호환성 보고서, 반복 가능한 검사, CI evidence가 커널 민감 eBPF 작업을 더 자신 있게 배포하도록 돕는 방식입니다.",
			tags: [
				"eBPF",
				"CI",
				"커널 보안",
				"오픈소스"
			],
			summary: [
				"커널 민감 도구에는 성공한 local build뿐 아니라 호환성 evidence가 필요합니다.",
				"CI 보고서는 verifier, helper, kernel version 가정을 리뷰하기 쉽게 만듭니다.",
				"evidence를 공개하면 오픈소스 보안 프로젝트의 신뢰가 향상됩니다."
			],
			sections: [
				{
					heading: "호환성 evidence가 중요한 이유",
					paragraphs: ["eBPF program은 kernel behavior, helper availability, verifier constraints, runtime environment 세부사항에 의존합니다. 도구가 한 개발자 머신에서는 동작하지만 다른 kernel line의 사용자에게는 실패할 수 있습니다.", "호환성 테스트는 이런 가정을 가시화합니다. 또한 maintainer가 release 전에 regression을 잡을 수 있는 방법을 제공합니다."]
				},
				{
					heading: "유용한 보고서에 포함할 내용",
					bullets: [
						"테스트한 kernel version과 architecture.",
						"관련 있을 경우 program load status와 verifier output.",
						"helper, map, feature 가정.",
						"명확한 pass, fail 또는 partial-support verdict.",
						"결과를 만든 code와 CI run 링크."
					]
				},
				{
					heading: "CI 통합 패턴",
					paragraphs: ["CI job은 사람이 읽을 수 있는 보고서와 기계가 읽을 수 있는 artifact를 모두 생성해야 합니다. 웹사이트는 요약본을 게시하여 사용자와 contributor가 raw workflow log를 뒤지지 않고도 프로젝트를 확인할 수 있게 합니다."]
				},
				{
					heading: "신뢰 효과",
					paragraphs: ["보안 엔지니어링 회사에 공개 호환성 evidence는 두 가지 역할을 합니다. 사용자가 도구가 자기 환경에 맞는지 판단하도록 돕고, engineering claim이 반복 가능한 검사로 뒷받침된다는 점을 보여줍니다."]
				}
			],
			references: [{
				label: "Kernel eBPF 문서",
				url: "https://docs.kernel.org/bpf/"
			}]
		}
	}
};
//#endregion
//#region src/data/articles.ts
var englishArticleContent = {
	"spf-dkim-dmarc-google-workspace-security-domain": {
		title: "SPF, DKIM, and DMARC Setup for a Google Workspace Security Domain",
		description: "A practical guide to Google Workspace email authentication for company domains that need stronger trust and lower spoofing risk.",
		tags: [
			"Email Security",
			"Google Workspace",
			"DMARC",
			"DNS"
		],
		summary: [
			"SPF authorizes the mail servers that can send for the domain.",
			"DKIM signs messages so receivers can verify that content was not changed in transit.",
			"DMARC tells receivers what to do when SPF or DKIM alignment fails and where to send reports."
		],
		sections: [
			{
				heading: "Why this matters for a young company domain",
				paragraphs: ["A company website can look professional while its email domain is still easy to impersonate. SPF, DKIM, and DMARC close that gap by giving receivers evidence about who is allowed to send mail and how failures should be handled.", "For a security-focused company, this is not optional polish. It is part of the public trust surface, especially when the site publishes contact, support, security, privacy, legal, and sales mailboxes."]
			},
			{
				heading: "Recommended rollout order",
				bullets: [
					"Create the operational mailboxes first, including a DMARC reporting mailbox such as dmarc@example.com.",
					"Publish SPF for the active sender, for example Google Workspace.",
					"Enable Google Workspace DKIM signing and publish the DKIM TXT record.",
					"Start DMARC with p=none and reporting enabled so failures can be observed before enforcement.",
					"Move to quarantine or reject only after legitimate senders are aligned."
				]
			},
			{
				heading: "What to verify",
				paragraphs: ["Verification should happen from both DNS and real message headers. DNS confirms that the records exist. Message headers confirm that mail sent through the production path is actually passing SPF, DKIM, and DMARC alignment."],
				bullets: [
					"SPF includes only services that actually send mail for the domain.",
					"DKIM uses a current selector and shows pass in received messages.",
					"DMARC reports are delivered to a monitored mailbox.",
					"The policy is documented so future mail tools do not break deliverability."
				]
			},
			{
				heading: "Company-grade next step",
				paragraphs: ["After reports look clean, tighten DMARC gradually. The strongest end state is reject, but the right timeline depends on whether newsletters, transactional mail, CRM tools, or support tools also send from the domain."]
			}
		],
		references: [{
			label: "Google Workspace email authentication help",
			url: "https://support.google.com/a/topic/2759254"
		}, {
			label: "DMARC specification overview",
			url: "https://dmarc.org/"
		}]
	},
	"security-headers-cloudflare-pages-react": {
		title: "Security Headers for Cloudflare Pages and React Sites",
		description: "How to use security headers, canonical metadata, and response verification to reduce common browser-side risks on static React deployments.",
		tags: [
			"Cloudflare",
			"React",
			"Security Headers",
			"Frontend Security"
		],
		summary: [
			"Security headers should be treated as deployment configuration, not just code comments.",
			"Cloudflare Pages supports static header rules that can be tested before release.",
			"Wildcard CORS is usually too broad for public static responses unless there is a specific cross-origin use case."
		],
		sections: [
			{
				heading: "The baseline header set",
				paragraphs: ["A hardened React site should set browser behavior explicitly. The exact policy depends on the app, but the baseline usually includes content type protection, clickjacking protection, referrer control, permissions policy, and a carefully chosen content security policy.", "Static hosts make this easy to forget because the app still renders without headers. The security work has to be verified at the HTTP response layer."]
			},
			{
				heading: "Cloudflare Pages considerations",
				bullets: [
					"Keep header rules close to the repository when possible so changes are reviewed with code.",
					"Avoid dashboard-only changes unless they are documented, because they are harder for future maintainers to audit.",
					"Verify both www and apex domains if both are served.",
					"Check that redirects do not strip important headers from the final response."
				]
			},
			{
				heading: "CORS should be intentional",
				paragraphs: ["Access-Control-Allow-Origin: * is often copied into sites without a reason. For normal web pages, broad CORS usually does not help visitors and can make accidental data exposure easier if future endpoints are added under the same policy."]
			},
			{
				heading: "What to automate",
				bullets: [
					"A test that rejects wildcard CORS in static header configuration.",
					"A build step that publishes sitemap and robots files.",
					"A preview check that confirms critical pages render and metadata is present.",
					"A live-response check after deployment for production domains."
				]
			}
		],
		references: [{
			label: "Cloudflare Pages headers documentation",
			url: "https://developers.cloudflare.com/pages/configuration/headers/"
		}, {
			label: "MDN HTTP security headers overview",
			url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
		}]
	},
	"vulnerability-disclosure-security-txt-website": {
		title: "Vulnerability Disclosure and security.txt for Company Websites",
		description: "A practical security.txt and vulnerability disclosure workflow for small companies that want a credible security contact path.",
		tags: [
			"Vulnerability Disclosure",
			"security.txt",
			"Trust"
		],
		summary: [
			"security.txt gives researchers a predictable place to find a security contact.",
			"The mailbox behind that contact must be monitored and routed internally.",
			"A public policy reduces confusion before an incident happens."
		],
		sections: [
			{
				heading: "What security.txt solves",
				paragraphs: ["Researchers and customers should not have to guess whether security issues belong in a contact form, a support inbox, or a social media message. A security.txt file creates a standard path for reporting vulnerabilities.", "The file is small, but it signals operational maturity when it includes a real contact, canonical URL, policy URL, and preferred language."]
			},
			{
				heading: "Minimum practical setup",
				bullets: [
					"Publish /.well-known/security.txt on the canonical domain.",
					"Use a monitored security mailbox, such as security@example.com.",
					"Link to a vulnerability disclosure policy or security page.",
					"Make sure support and contact teams know where to forward security reports."
				]
			},
			{
				heading: "Response workflow",
				paragraphs: ["The website is only the entry point. A company-grade setup also needs a response owner, severity triage, evidence capture, fix tracking, and a short communication template for acknowledging valid reports."]
			},
			{
				heading: "Common mistakes",
				bullets: [
					"Publishing a security mailbox that nobody monitors.",
					"Using a personal email address instead of a company alias.",
					"Forgetting to update the canonical URL after a domain migration.",
					"Treating disclosure handling as a legal page only instead of an operational workflow."
				]
			}
		],
		references: [{
			label: "RFC 9116 security.txt",
			url: "https://www.rfc-editor.org/rfc/rfc9116"
		}]
	},
	"react-contact-form-spam-abuse-hardening": {
		title: "Hardening React Contact Forms Against Spam and Abuse",
		description: "How to protect a React contact page with validation, bot controls, routing discipline, and safer email handling.",
		tags: [
			"React",
			"Contact Forms",
			"Abuse Controls",
			"Email"
		],
		summary: [
			"Contact forms are public write endpoints and should be treated as abuse targets.",
			"Bot controls help, but validation, rate limits, and destination routing still matter.",
			"Operational mailboxes make it easier to separate sales, support, privacy, legal, and security messages."
		],
		sections: [
			{
				heading: "The risk surface",
				paragraphs: ["A contact page looks simple, but it often becomes the first public endpoint attackers can write to. Spam, phishing payloads, oversized submissions, and automated probes can all target the same workflow.", "The frontend can improve quality and reduce noise, but server-side validation and rate limiting remain necessary for any real mail-sending endpoint."]
			},
			{
				heading: "Frontend controls",
				bullets: [
					"Validate required fields and expected lengths before submission.",
					"Avoid exposing provider secrets or private API keys in client-side code.",
					"Use clear success and failure states so users do not submit repeatedly.",
					"Load bot protection only where needed to reduce page weight."
				]
			},
			{
				heading: "Backend and email controls",
				bullets: [
					"Rate limit by IP, fingerprint, or session where your platform allows it.",
					"Normalize and validate payloads before composing email.",
					"Route messages to role-based mailboxes instead of personal addresses.",
					"Log enough context to investigate abuse without collecting unnecessary personal data."
				]
			},
			{
				heading: "Professional routing",
				paragraphs: ["Company aliases make the workflow easier to operate. Support questions can go to support, vulnerability reports to security, privacy requests to privacy, legal requests to legal, and sales leads to sales. That separation also looks more credible on the public site."]
			}
		],
		references: [{
			label: "OWASP automated threats overview",
			url: "https://owasp.org/www-project-automated-threats-to-web-applications/"
		}]
	},
	"ebpf-compatibility-testing-ci": {
		title: "eBPF Compatibility Testing in CI for Kernel-Sensitive Projects",
		description: "How compatibility reports, repeatable checks, and CI evidence help teams ship kernel-sensitive eBPF work with more confidence.",
		tags: [
			"eBPF",
			"CI",
			"Kernel Security",
			"Open Source"
		],
		summary: [
			"Kernel-sensitive tools need compatibility evidence, not only a successful local build.",
			"CI reports make verifier, helper, and kernel-version assumptions easier to review.",
			"Publishing the evidence improves trust for open-source security projects."
		],
		sections: [
			{
				heading: "Why compatibility evidence matters",
				paragraphs: ["eBPF programs depend on kernel behavior, helper availability, verifier constraints, and runtime environment details. A tool can work on one developer machine and still fail for users on another kernel line.", "Compatibility testing makes those assumptions visible. It also gives maintainers a way to catch regressions before a release."]
			},
			{
				heading: "What a useful report should include",
				bullets: [
					"Kernel version and architecture under test.",
					"Program load status and verifier output when relevant.",
					"Helper, map, and feature assumptions.",
					"A clear pass, fail, or partial-support verdict.",
					"Links to the code and CI run that produced the result."
				]
			},
			{
				heading: "CI integration pattern",
				paragraphs: ["The CI job should generate a human-readable report and a machine-readable artifact. The website can then publish a summarized version so users and contributors can inspect the project without digging through raw workflow logs."]
			},
			{
				heading: "Trust benefit",
				paragraphs: ["For a security engineering company, open compatibility evidence does two jobs. It helps users decide whether a tool fits their environment, and it demonstrates that engineering claims are backed by repeatable checks."]
			}
		],
		references: [{
			label: "Kernel eBPF documentation",
			url: "https://docs.kernel.org/bpf/"
		}]
	}
};
var articles = [
	{
		slug: "spf-dkim-dmarc-google-workspace-security-domain",
		publishedAt: "2026-06-14",
		updatedAt: "2026-06-14",
		readingMinutes: 6,
		relatedServiceSlugs: ["cybersecurity-consulting", "cloudflare-security-hardening"]
	},
	{
		slug: "security-headers-cloudflare-pages-react",
		publishedAt: "2026-06-14",
		updatedAt: "2026-06-14",
		readingMinutes: 7,
		relatedServiceSlugs: [
			"cloudflare-security-hardening",
			"react-security-audit",
			"cybersecurity-consulting"
		]
	},
	{
		slug: "vulnerability-disclosure-security-txt-website",
		publishedAt: "2026-06-14",
		updatedAt: "2026-06-14",
		readingMinutes: 5,
		relatedServiceSlugs: ["cybersecurity-consulting", "backend-api-hardening"]
	},
	{
		slug: "react-contact-form-spam-abuse-hardening",
		publishedAt: "2026-06-14",
		updatedAt: "2026-06-14",
		readingMinutes: 6,
		relatedServiceSlugs: [
			"secure-web-development",
			"react-security-audit",
			"backend-api-hardening"
		]
	},
	{
		slug: "ebpf-compatibility-testing-ci",
		publishedAt: "2026-06-14",
		updatedAt: "2026-06-14",
		readingMinutes: 7,
		relatedServiceSlugs: ["cybersecurity-consulting"]
	}
];
articles.map((article) => article.slug);
function getArticle(slug) {
	if (!slug) return;
	return articles.find((article) => article.slug === slug);
}
function localizeArticle(article, language) {
	const fallbackContent = englishArticleContent[article.slug];
	if (!fallbackContent) throw new Error(`Missing English article content for slug: ${article.slug}`);
	const content = (language === "en" ? fallbackContent : articleTranslations[article.slug]?.[language]) ?? fallbackContent;
	return {
		...article,
		...content
	};
}
function getLocalizedArticle(slug, language) {
	const article = getArticle(slug);
	return article ? localizeArticle(article, language) : void 0;
}
//#endregion
//#region src/data/growthServiceTranslations.ts
var growthServiceTranslations = {
	"cybersecurity-consulting": {
		tr: {
			title: "Web Platformları için Siber Güvenlik Danışmanlığı",
			shortTitle: "Siber Güvenlik Danışmanlığı",
			description: "Web uygulamaları, API’ler, bulut edge katmanları ve herkese açık iş sistemleri için pratik siber güvenlik danışmanlığı.",
			keywords: "siber güvenlik danışmanlığı, web uygulama güvenliği danışmanlığı, API güvenliği danışmanlığı, bulut güvenliği danışmanı",
			serviceType: "Siber güvenlik danışmanlığı",
			intent: "Yeni bir web sistemini yayına almadan, ölçeklemeden veya dış dünyaya açmadan önce net bir güvenlik planına ihtiyaç duyan ekipler için.",
			outcomes: [
				"İş riski ve uygulama maliyetiyle ilişkilendirilmiş öncelikli bir güvenlik yol haritası.",
				"Kimlik doğrulama, yetkilendirme, veri sızıntısı, başlıklar ve kötüye kullanım kontrolleri için somut düzeltmeler.",
				"Müşterilere, iş ortaklarına ve denetçilere açıklanabilir daha güçlü bir güvenlik duruşu."
			],
			deliverables: [
				"Mimari ve tehdit modeli incelemesi",
				"Risk öncelikli bulgular ve düzeltme notları",
				"Güvenlik başlıkları, DNS ve e-posta kimlik doğrulama incelemesi",
				"Üretim sistemleri için yayına hazırlık kontrol listesi",
				"Kritik düzeltmeler için uygulama desteği"
			],
			process: [
				{
					title: "Değerlendir",
					description: "Canlı yüzeyi, depo yapısını, kimlik akışlarını, API sınırlarını, DNS’i ve dağıtım platformunu inceleriz."
				},
				{
					title: "Önceliklendir",
					description: "Mühendislik zamanının gerçek riski değiştiren işlere gitmesi için acil açıklıkları güçlendirme çalışmalarından ayırırız."
				},
				{
					title: "Güçlendir",
					description: "Düzeltmeleri uygular veya yönlendirir, ardından CI içinde kalabilecek tekrarlanabilir kontrollerle doğrularız."
				}
			],
			proofPoints: [
				"security.txt açıklama iş akışı",
				"SPF, DKIM ve DMARC hizalaması",
				"Katı güvenlik başlıkları ve statik başlıklarda wildcard CORS bulunmaması"
			]
		},
		de: {
			title: "Cybersecurity-Beratung für Webplattformen",
			shortTitle: "Cybersecurity-Beratung",
			description: "Praxisnahe Cybersecurity-Beratung für Webanwendungen, APIs, Cloud-Edges und öffentlich erreichbare Geschäftssysteme.",
			keywords: "Cybersecurity Beratung, Web Application Security Consulting, API Security Consulting, Cloud Security Consultant",
			serviceType: "Cybersecurity-Beratung",
			intent: "Für Teams, die vor Launch, Skalierung oder Öffnung eines neuen Websystems einen klaren Sicherheitsplan brauchen.",
			outcomes: [
				"Eine priorisierte Security-Roadmap, die Geschäftsrisiko und Implementierungsaufwand verbindet.",
				"Konkrete Maßnahmen für Authentifizierung, Autorisierung, Datenexposition, Header und Abuse Controls.",
				"Eine Sicherheitslage, die Kunden, Partnern und Auditoren nachvollziehbar erklärt werden kann."
			],
			deliverables: [
				"Architektur- und Threat-Model-Review",
				"Risikogewichtete Findings mit Remediation-Hinweisen",
				"Review von Security Headers, DNS und E-Mail-Authentifizierung",
				"Launch-Readiness-Checkliste für Produktionssysteme",
				"Umsetzungsbegleitung für kritische Fixes"
			],
			process: [
				{
					title: "Bewerten",
					description: "Wir prüfen Live-Oberfläche, Repository-Struktur, Auth-Flows, API-Grenzen, DNS und Deployment-Plattform."
				},
				{
					title: "Priorisieren",
					description: "Wir trennen akute Exposition von Härtungsarbeit, damit Engineering-Zeit dort wirkt, wo Risiko sinkt."
				},
				{
					title: "Härten",
					description: "Wir implementieren oder begleiten Fixes und verifizieren sie mit wiederholbaren Checks, die in CI bleiben können."
				}
			],
			proofPoints: [
				"security.txt Disclosure-Workflow",
				"SPF-, DKIM- und DMARC-Ausrichtung",
				"Strikte Security Headers und keine Wildcard-CORS-Regel in statischen Headers"
			]
		},
		ja: {
			title: "Webプラットフォーム向けサイバーセキュリティコンサルティング",
			shortTitle: "サイバーセキュリティ相談",
			description: "Webアプリケーション、API、クラウドエッジ、公開業務システム向けの実践的なサイバーセキュリティ支援。",
			keywords: "サイバーセキュリティコンサルティング, Webアプリケーションセキュリティ, APIセキュリティ, クラウドセキュリティ",
			serviceType: "サイバーセキュリティコンサルティング",
			intent: "新しいWebシステムの公開、拡張、外部公開の前に、明確なセキュリティ計画が必要なチーム向け。",
			outcomes: [
				"事業リスクと実装コストに結び付いた優先順位付きのセキュリティロードマップ。",
				"認証、認可、データ露出、ヘッダー、悪用対策に対する具体的な修正。",
				"顧客、パートナー、監査担当者に説明できる、より明確なセキュリティ姿勢。"
			],
			deliverables: [
				"アーキテクチャと脅威モデルのレビュー",
				"リスク順に整理した指摘と修正メモ",
				"セキュリティヘッダー、DNS、メール認証のレビュー",
				"本番公開前の準備チェックリスト",
				"重要修正に対する実装支援"
			],
			process: [
				{
					title: "評価",
					description: "公開面、リポジトリ構造、認証フロー、API境界、DNS、デプロイ基盤を確認します。"
				},
				{
					title: "優先順位付け",
					description: "緊急性の高い露出と長期的な強化作業を分け、リスク低減に直結する作業へ集中します。"
				},
				{
					title: "強化",
					description: "修正を実装または支援し、CIに残せる再現可能なチェックで検証します。"
				}
			],
			proofPoints: [
				"security.txtによる脆弱性報告フロー",
				"SPF、DKIM、DMARCの整合",
				"厳格なセキュリティヘッダーと静的ヘッダーでのwildcard CORS排除"
			]
		},
		"zh-CN": {
			title: "面向 Web 平台的网络安全咨询",
			shortTitle: "网络安全咨询",
			description: "为 Web 应用、API、云边缘和面向公网的业务系统提供务实的网络安全咨询。",
			keywords: "网络安全咨询, Web 应用安全咨询, API 安全咨询, 云安全顾问",
			serviceType: "网络安全咨询",
			intent: "适用于在发布、扩展或开放新 Web 系统之前需要清晰安全计划的团队。",
			outcomes: [
				"与业务风险和实施成本直接关联的优先级安全路线图。",
				"针对认证、授权、数据暴露、响应头和滥用控制的具体修复建议。",
				"能够向客户、合作伙伴和审计方解释的更成熟安全姿态。"
			],
			deliverables: [
				"架构与威胁建模评审",
				"按风险排序的发现与修复说明",
				"安全响应头、DNS 和邮件认证评审",
				"生产系统上线准备清单",
				"关键修复的后续实施支持"
			],
			process: [
				{
					title: "评估",
					description: "审查线上暴露面、代码库结构、认证流程、API 边界、DNS 和部署平台。"
				},
				{
					title: "排序",
					description: "区分紧急暴露与加固工作，让工程时间投入到真正改变风险的位置。"
				},
				{
					title: "加固",
					description: "实施或指导修复，并用可重复的检查进行验证，使其可以保留在 CI 中。"
				}
			],
			proofPoints: [
				"security.txt 披露工作流",
				"SPF、DKIM 与 DMARC 对齐",
				"严格安全响应头，静态响应头中无 wildcard CORS 策略"
			]
		},
		es: {
			title: "Consultoría de ciberseguridad para plataformas web",
			shortTitle: "Consultoría de ciberseguridad",
			description: "Consultoría práctica de ciberseguridad para aplicaciones web, APIs, edge cloud y sistemas de negocio expuestos públicamente.",
			keywords: "consultoría de ciberseguridad, seguridad de aplicaciones web, seguridad API, consultor de seguridad cloud",
			serviceType: "Consultoría de ciberseguridad",
			intent: "Para equipos que necesitan un plan de seguridad claro antes de lanzar, escalar o exponer un nuevo sistema web.",
			outcomes: [
				"Una hoja de ruta priorizada que conecta riesgo de negocio y coste de implementación.",
				"Correcciones concretas para autenticación, autorización, exposición de datos, cabeceras y controles antiabuso.",
				"Una postura de seguridad más clara y defendible ante clientes, socios y auditores."
			],
			deliverables: [
				"Revisión de arquitectura y modelo de amenazas",
				"Hallazgos priorizados por riesgo con notas de remediación",
				"Revisión de cabeceras de seguridad, DNS y autenticación de correo",
				"Checklist de preparación para producción",
				"Soporte de implementación para correcciones críticas"
			],
			process: [
				{
					title: "Evaluar",
					description: "Revisamos la superficie activa, estructura del repositorio, flujos de autenticación, límites de API, DNS y plataforma de despliegue."
				},
				{
					title: "Priorizar",
					description: "Separamos exposición urgente de trabajo de endurecimiento para invertir ingeniería donde realmente reduce riesgo."
				},
				{
					title: "Endurecer",
					description: "Implementamos o guiamos correcciones y las verificamos con controles repetibles que pueden quedarse en CI."
				}
			],
			proofPoints: [
				"Flujo de divulgación con security.txt",
				"Alineación SPF, DKIM y DMARC",
				"Cabeceras estrictas y sin wildcard CORS en cabeceras estáticas"
			]
		},
		fr: {
			title: "Conseil en cybersécurité pour plateformes web",
			shortTitle: "Conseil cybersécurité",
			description: "Conseil pragmatique en cybersécurité pour applications web, API, edge cloud et systèmes métier exposés publiquement.",
			keywords: "conseil cybersécurité, sécurité applications web, sécurité API, consultant sécurité cloud",
			serviceType: "Conseil en cybersécurité",
			intent: "Pour les équipes qui ont besoin d’un plan de sécurité clair avant de lancer, dimensionner ou exposer un nouveau système web.",
			outcomes: [
				"Une feuille de route priorisée reliant risque métier et coût d’implémentation.",
				"Des corrections concrètes pour l’authentification, l’autorisation, l’exposition de données, les en-têtes et les contrôles anti-abus.",
				"Une posture de sécurité plus nette, explicable aux clients, partenaires et auditeurs."
			],
			deliverables: [
				"Revue d’architecture et de modèle de menace",
				"Constats classés par risque avec notes de remédiation",
				"Revue des en-têtes de sécurité, DNS et authentification e-mail",
				"Checklist de préparation au lancement en production",
				"Support d’implémentation pour les corrections critiques"
			],
			process: [
				{
					title: "Évaluer",
					description: "Nous examinons la surface exposée, la structure du dépôt, les flux d’authentification, les frontières API, le DNS et la plateforme de déploiement."
				},
				{
					title: "Prioriser",
					description: "Nous séparons l’exposition urgente du durcissement afin que l’effort d’ingénierie réduise réellement le risque."
				},
				{
					title: "Durcir",
					description: "Nous implémentons ou guidons les corrections, puis les vérifions avec des contrôles répétables pouvant rester dans la CI."
				}
			],
			proofPoints: [
				"Workflow de divulgation security.txt",
				"Alignement SPF, DKIM et DMARC",
				"En-têtes de sécurité stricts et absence de wildcard CORS dans les en-têtes statiques"
			]
		},
		ko: {
			title: "웹 플랫폼을 위한 사이버보안 컨설팅",
			shortTitle: "사이버보안 컨설팅",
			description: "웹 애플리케이션, API, 클라우드 엣지, 공개 비즈니스 시스템을 위한 실무 중심 사이버보안 컨설팅.",
			keywords: "사이버보안 컨설팅, 웹 애플리케이션 보안 컨설팅, API 보안 컨설팅, 클라우드 보안 컨설턴트",
			serviceType: "사이버보안 컨설팅",
			intent: "새 웹 시스템을 출시, 확장 또는 외부에 노출하기 전에 명확한 보안 계획이 필요한 팀을 위한 서비스입니다.",
			outcomes: [
				"비즈니스 위험과 구현 비용에 연결된 우선순위 보안 로드맵.",
				"인증, 권한 부여, 데이터 노출, 헤더, 남용 방지에 대한 구체적인 수정안.",
				"고객, 파트너, 감사자에게 설명할 수 있는 더 명확한 보안 태세."
			],
			deliverables: [
				"아키텍처 및 위협 모델 검토",
				"위험도 기반 발견 사항과 개선 메모",
				"보안 헤더, DNS, 이메일 인증 검토",
				"운영 시스템 출시 준비 체크리스트",
				"중요 수정 사항 구현 지원"
			],
			process: [
				{
					title: "평가",
					description: "라이브 표면, 저장소 구조, 인증 흐름, API 경계, DNS, 배포 플랫폼을 검토합니다."
				},
				{
					title: "우선순위화",
					description: "긴급 노출과 하드닝 작업을 구분해 엔지니어링 시간이 실제 위험을 줄이는 곳에 쓰이게 합니다."
				},
				{
					title: "하드닝",
					description: "수정을 구현하거나 안내하고, CI에 남길 수 있는 반복 가능한 검사로 검증합니다."
				}
			],
			proofPoints: [
				"security.txt 공개 워크플로",
				"SPF, DKIM, DMARC 정렬",
				"엄격한 보안 헤더와 정적 헤더의 wildcard CORS 제거"
			]
		}
	},
	"secure-web-development": {
		tr: {
			title: "Güvenli Web Geliştirme Hizmetleri",
			shortTitle: "Güvenli Web Geliştirme",
			description: "Üretim kalitesinde web uygulamalarına ihtiyaç duyan ekipler için güvenli React, TypeScript ve API geliştirme.",
			keywords: "güvenli web geliştirme, güvenli React geliştirme, güvenli TypeScript geliştirme, üretim web uygulama güvenliği",
			serviceType: "Güvenli web geliştirme",
			intent: "Web ürününü en baştan güvenlik, performans ve sürdürülebilirlik ile inşa etmek isteyen kurucular ve ekipler için.",
			outcomes: [
				"Net güven sinyalleri, güçlü metadata ve disiplinli üretim dağıtımı olan hızlı bir web uygulaması.",
				"Yaygın injection, kötüye kullanım ve veri sızıntısı risklerini azaltan frontend/backend sınırları.",
				"Gelecekteki mühendislerin anlayabileceği, test edebileceği ve genişletebileceği bir kod tabanı."
			],
			deliverables: [
				"React ve TypeScript uygulama geliştirme",
				"Güvenlik bilinciyle tasarlanmış iletişim, lead ve hesap iş akışları",
				"SEO, erişilebilirlik ve structured data uygulaması",
				"Tip güvenliği, testler, build ve bağımlılık riski için CI kontrolleri",
				"Cloudflare Pages, Vercel veya benzeri platformlar için dağıtım desteği"
			],
			process: [
				{
					title: "Şekillendir",
					description: "Ürün yüzeyini, kritik dönüşüm yollarını, güven gereksinimlerini ve yayın kısıtlarını netleştiririz."
				},
				{
					title: "İnşa et",
					description: "Uygulamayı küçük ve incelenebilir değişikliklerle, güvenlik ve erişilebilirlik kontrolleri dahil şekilde yayınlarız."
				},
				{
					title: "Doğrula",
					description: "Herkese açık yayın öncesinde build, rota, metadata ve tarayıcı kontrollerini çalıştırırız."
				}
			],
			proofPoints: [
				"Sunucu tarafında prerender edilmiş sayfalar",
				"Canonical ve hreflang metadata",
				"Şirket e-posta aliaslarına yönlenen iletişim iş akışları"
			]
		},
		de: {
			title: "Sichere Webentwicklung",
			shortTitle: "Sichere Webentwicklung",
			description: "Sichere React-, TypeScript- und API-Entwicklung für Teams, die produktionsreife Webanwendungen benötigen.",
			keywords: "sichere Webentwicklung, sichere React Entwicklung, sichere TypeScript Entwicklung, Web Application Security",
			serviceType: "Sichere Webentwicklung",
			intent: "Für Gründer und Teams, die ein Webprodukt von Beginn an mit Sicherheit, Performance und Wartbarkeit bauen wollen.",
			outcomes: [
				"Eine schnelle Webanwendung mit klaren Trust-Signalen, sauberer Metadata und disziplinierter Produktion.",
				"Frontend- und Backend-Grenzen, die Injection-, Abuse- und Data-Leak-Risiken reduzieren.",
				"Eine Codebase, die künftige Engineers verstehen, testen und erweitern können."
			],
			deliverables: [
				"React- und TypeScript-Anwendungsentwicklung",
				"Security-aware Contact-, Lead- und Account-Workflows",
				"SEO-, Accessibility- und Structured-Data-Implementierung",
				"CI-Checks für Types, Tests, Build und Dependency Risk",
				"Deployment-Support für Cloudflare Pages, Vercel oder ähnliche Plattformen"
			],
			process: [
				{
					title: "Formen",
					description: "Wir definieren Produktoberfläche, kritische Conversion-Pfade, Trust-Anforderungen und Launch-Grenzen."
				},
				{
					title: "Bauen",
					description: "Wir liefern in kleinen, reviewbaren Änderungen inklusive Security- und Accessibility-Checks."
				},
				{
					title: "Verifizieren",
					description: "Vor dem Public Release prüfen wir Build, Routen, Metadata und Browser-Verhalten."
				}
			],
			proofPoints: [
				"Serverseitig prerenderte Seiten",
				"Canonical- und hreflang-Metadaten",
				"Kontakt-Workflows mit Routing auf Unternehmens-Mailaliases"
			]
		},
		ja: {
			title: "セキュアWeb開発サービス",
			shortTitle: "セキュアWeb開発",
			description: "本番品質のWebアプリケーションが必要なチーム向けの、セキュアなReact、TypeScript、API開発。",
			keywords: "セキュアWeb開発, セキュアReact開発, セキュアTypeScript開発, Webアプリケーションセキュリティ",
			serviceType: "セキュアWeb開発",
			intent: "セキュリティ、性能、保守性を最初から組み込んだWebプロダクトを必要とする創業者やチーム向け。",
			outcomes: [
				"明確な信頼シグナル、強いメタデータ、規律ある本番デプロイを備えた高速なWebアプリ。",
				"一般的なインジェクション、悪用、データ漏えいリスクを抑えるフロントエンド/バックエンド境界。",
				"将来のエンジニアが理解し、テストし、拡張できるコードベース。"
			],
			deliverables: [
				"ReactとTypeScriptによるアプリケーション開発",
				"セキュリティを考慮した問い合わせ、リード、アカウントワークフロー",
				"SEO、アクセシビリティ、構造化データの実装",
				"型安全性、テスト、ビルド、依存関係リスクのCIチェック",
				"Cloudflare Pages、Vercelなどへのデプロイ支援"
			],
			process: [
				{
					title: "設計",
					description: "プロダクト面、重要なコンバージョン経路、信頼要件、公開制約を定義します。"
				},
				{
					title: "構築",
					description: "セキュリティとアクセシビリティのチェックを含め、小さくレビューしやすい変更で出荷します。"
				},
				{
					title: "検証",
					description: "公開前にビルド、ルート、メタデータ、ブラウザ上の挙動を検証します。"
				}
			],
			proofPoints: [
				"サーバーサイドでプリレンダーされたページ",
				"canonicalとhreflangメタデータ",
				"会社メールエイリアスへルーティングされる問い合わせフロー"
			]
		},
		"zh-CN": {
			title: "安全 Web 开发服务",
			shortTitle: "安全 Web 开发",
			description: "为需要生产级 Web 应用的团队提供安全的 React、TypeScript 与 API 开发。",
			keywords: "安全 Web 开发, 安全 React 开发, 安全 TypeScript 开发, 生产级 Web 应用安全",
			serviceType: "安全 Web 开发",
			intent: "适用于希望从一开始就把安全、性能和可维护性纳入 Web 产品的创始人和团队。",
			outcomes: [
				"具备清晰信任信号、强元数据和规范生产部署流程的高速 Web 应用。",
				"降低常见注入、滥用和数据泄漏风险的前后端边界。",
				"未来工程师可以理解、测试并扩展的代码库。"
			],
			deliverables: [
				"React 与 TypeScript 应用开发",
				"具备安全意识的联系、线索和账户工作流",
				"SEO、可访问性与结构化数据实现",
				"类型安全、测试、构建和依赖风险的 CI 检查",
				"Cloudflare Pages、Vercel 或类似平台的部署支持"
			],
			process: [
				{
					title: "定义",
					description: "明确产品表面、关键转化路径、信任要求和上线约束。"
				},
				{
					title: "构建",
					description: "以小而可审查的变更交付应用，并纳入安全与可访问性检查。"
				},
				{
					title: "验证",
					description: "公开发布前运行构建、路由、元数据和浏览器检查。"
				}
			],
			proofPoints: [
				"服务端预渲染页面",
				"Canonical 与 hreflang 元数据",
				"路由到公司邮箱别名的联系工作流"
			]
		},
		es: {
			title: "Servicios de desarrollo web seguro",
			shortTitle: "Desarrollo web seguro",
			description: "Desarrollo seguro en React, TypeScript y APIs para equipos que necesitan aplicaciones web listas para producción.",
			keywords: "desarrollo web seguro, desarrollo React seguro, desarrollo TypeScript seguro, seguridad web en producción",
			serviceType: "Desarrollo web seguro",
			intent: "Para fundadores y equipos que necesitan construir un producto web con seguridad, rendimiento y mantenibilidad desde el inicio.",
			outcomes: [
				"Una aplicación rápida con señales claras de confianza, metadata sólida y disciplina de despliegue.",
				"Límites frontend/backend que reducen riesgos de inyección, abuso y fuga de datos.",
				"Una base de código que futuros ingenieros pueden entender, probar y extender."
			],
			deliverables: [
				"Desarrollo de aplicaciones React y TypeScript",
				"Flujos de contacto, lead y cuenta con criterio de seguridad",
				"Implementación de SEO, accesibilidad y datos estructurados",
				"Checks CI para tipos, tests, build y riesgo de dependencias",
				"Soporte de despliegue en Cloudflare Pages, Vercel o plataformas similares"
			],
			process: [
				{
					title: "Definir",
					description: "Definimos superficie de producto, rutas críticas de conversión, requisitos de confianza y restricciones de lanzamiento."
				},
				{
					title: "Construir",
					description: "Entregamos en cambios pequeños y revisables con controles de seguridad y accesibilidad incluidos."
				},
				{
					title: "Verificar",
					description: "Ejecutamos checks de build, rutas, metadata y navegador antes del lanzamiento público."
				}
			],
			proofPoints: [
				"Páginas prerenderizadas en servidor",
				"Metadata canonical y hreflang",
				"Flujos de contacto enrutados a alias corporativos"
			]
		},
		fr: {
			title: "Services de développement web sécurisé",
			shortTitle: "Développement web sécurisé",
			description: "Développement sécurisé React, TypeScript et API pour les équipes qui ont besoin d’applications web prêtes pour la production.",
			keywords: "développement web sécurisé, développement React sécurisé, développement TypeScript sécurisé, sécurité application web",
			serviceType: "Développement web sécurisé",
			intent: "Pour les fondateurs et équipes qui veulent construire un produit web avec sécurité, performance et maintenabilité dès le départ.",
			outcomes: [
				"Une application rapide avec signaux de confiance clairs, métadonnées solides et discipline de déploiement.",
				"Des frontières frontend/backend qui réduisent les risques d’injection, d’abus et de fuite de données.",
				"Une base de code que les futurs ingénieurs peuvent comprendre, tester et étendre."
			],
			deliverables: [
				"Développement d’applications React et TypeScript",
				"Workflows contact, lead et compte conçus avec une logique de sécurité",
				"Implémentation SEO, accessibilité et données structurées",
				"Contrôles CI pour typage, tests, build et risque dépendances",
				"Support de déploiement pour Cloudflare Pages, Vercel ou plateformes similaires"
			],
			process: [
				{
					title: "Cadrer",
					description: "Nous définissons la surface produit, les parcours de conversion critiques, les exigences de confiance et les contraintes de lancement."
				},
				{
					title: "Construire",
					description: "Nous livrons par changements petits et vérifiables, avec contrôles de sécurité et d’accessibilité."
				},
				{
					title: "Vérifier",
					description: "Nous lançons les contrôles de build, routes, métadonnées et navigateur avant la publication."
				}
			],
			proofPoints: [
				"Pages pré-rendues côté serveur",
				"Métadonnées canonical et hreflang",
				"Workflows de contact routés vers des alias e-mail d’entreprise"
			]
		},
		ko: {
			title: "안전한 웹 개발 서비스",
			shortTitle: "안전한 웹 개발",
			description: "프로덕션급 웹 애플리케이션이 필요한 팀을 위한 안전한 React, TypeScript, API 개발.",
			keywords: "안전한 웹 개발, 안전한 React 개발, 안전한 TypeScript 개발, 프로덕션 웹 애플리케이션 보안",
			serviceType: "안전한 웹 개발",
			intent: "보안, 성능, 유지보수성을 처음부터 갖춘 웹 제품이 필요한 창업자와 팀을 위한 서비스입니다.",
			outcomes: [
				"명확한 신뢰 신호, 강한 메타데이터, 안정적인 운영 배포 체계를 갖춘 빠른 웹 애플리케이션.",
				"일반적인 인젝션, 남용, 데이터 누출 위험을 줄이는 프론트엔드/백엔드 경계.",
				"미래의 엔지니어가 이해하고 테스트하며 확장할 수 있는 코드베이스."
			],
			deliverables: [
				"React 및 TypeScript 애플리케이션 개발",
				"보안을 고려한 문의, 리드, 계정 워크플로",
				"SEO, 접근성, 구조화 데이터 구현",
				"타입 안전성, 테스트, 빌드, 의존성 위험에 대한 CI 검사",
				"Cloudflare Pages, Vercel 또는 유사 플랫폼 배포 지원"
			],
			process: [
				{
					title: "정의",
					description: "제품 표면, 핵심 전환 경로, 신뢰 요구사항, 출시 제약을 정의합니다."
				},
				{
					title: "구축",
					description: "보안과 접근성 검사를 포함해 작고 검토 가능한 변경으로 애플리케이션을 제공합니다."
				},
				{
					title: "검증",
					description: "공개 출시 전에 빌드, 라우트, 메타데이터, 브라우저 검사를 수행합니다."
				}
			],
			proofPoints: [
				"서버 사이드 프리렌더링 페이지",
				"canonical 및 hreflang 메타데이터",
				"회사 이메일 별칭으로 라우팅되는 문의 워크플로"
			]
		}
	},
	"cloudflare-security-hardening": {
		tr: {
			title: "Cloudflare Güvenlik Güçlendirmesi",
			shortTitle: "Cloudflare Güçlendirme",
			description: "Web siteleri, DNS, e-posta kimlik doğrulama, başlıklar ve edge yapılandırması için Cloudflare güvenlik güçlendirmesi.",
			keywords: "Cloudflare güvenlik güçlendirme, Cloudflare Pages güvenliği, Cloudflare DNS güvenliği, web sitesi güvenlik başlıkları",
			serviceType: "Cloudflare güvenlik güçlendirmesi",
			intent: "Cloudflare kullanan ve daha sıkı başlıklar, temiz DNS, güvenli edge kuralları ve daha iyi yayın hijyeni isteyen siteler için.",
			outcomes: [
				"Yanlışlıkla oluşan açıklıkları azaltan daha savunulabilir bir Cloudflare yapılandırması.",
				"Spoofing ve marka kötüye kullanım riskini azaltan DNS ve e-posta kayıtları.",
				"Geniş varsayımlara değil uygulamaya göre ayarlanmış başlık ve cache davranışı."
			],
			deliverables: [
				"DNS ve proxy yapılandırma incelemesi",
				"Statik ve dinamik yanıtlar için güvenlik başlığı politikası",
				"SPF, DKIM, DMARC ve raporlama posta kutusu doğrulaması",
				"Redirect ve canonical URL incelemesi",
				"Dağıtım ve rollback kontrol listesi"
			],
			process: [
				{
					title: "Envanter",
					description: "Aktif DNS kayıtlarını, proxied rotaları, yönlendirmeleri, başlıkları ve dağıtım çıktılarını haritalarız."
				},
				{
					title: "Sıkılaştır",
					description: "Riski azaltmak için gereken en küçük değişikliklerle kayıtları, başlıkları ve edge kurallarını ayarlarız."
				},
				{
					title: "Doğrula",
					description: "Canlı yanıtları doğrular ve gelecekteki değişiklikler için kısa bir operasyon kaydı çıkarırız."
				}
			],
			proofPoints: [
				"Cloudflare Pages başlık politikası",
				"Robots ve sitemap yayını",
				"DMARC raporlama posta kutusu desteği"
			]
		},
		de: {
			title: "Cloudflare Security Hardening",
			shortTitle: "Cloudflare Hardening",
			description: "Cloudflare-Härtung für Websites, DNS, E-Mail-Authentifizierung, Header und Edge-Konfiguration.",
			keywords: "Cloudflare Security Hardening, Cloudflare Pages Security, Cloudflare DNS Security, Website Security Headers",
			serviceType: "Cloudflare Security Hardening",
			intent: "Für Websites auf Cloudflare, die strengere Header, saubereres DNS, sicherere Edge-Regeln und bessere Launch-Hygiene brauchen.",
			outcomes: [
				"Eine besser verteidigbare Cloudflare-Konfiguration mit weniger unbeabsichtigten Expositionen.",
				"DNS- und E-Mail-Records, die Spoofing- und Markenmissbrauchsrisiko reduzieren.",
				"Header- und Cache-Verhalten, das zur Anwendung passt statt zu breiten Defaults."
			],
			deliverables: [
				"Review von DNS- und Proxy-Konfiguration",
				"Security-Header-Policy für statische und dynamische Antworten",
				"SPF-, DKIM-, DMARC- und Reporting-Mailbox-Verifizierung",
				"Review von Redirects und Canonical URLs",
				"Deployment- und Rollback-Checkliste"
			],
			process: [
				{
					title: "Inventarisieren",
					description: "Wir kartieren aktive DNS-Records, proxied Routes, Redirects, Header und Deployment-Artefakte."
				},
				{
					title: "Straffen",
					description: "Wir passen Records, Header und Edge-Regeln mit den kleinsten risikoreduzierenden Änderungen an."
				},
				{
					title: "Bestätigen",
					description: "Wir verifizieren Live-Antworten und dokumentieren eine kurze Betriebsreferenz für spätere Änderungen."
				}
			],
			proofPoints: [
				"Cloudflare Pages Header-Policy",
				"Veröffentlichung von robots.txt und Sitemap",
				"DMARC-Reporting-Mailbox-Support"
			]
		},
		ja: {
			title: "Cloudflareセキュリティ強化",
			shortTitle: "Cloudflare強化",
			description: "Webサイト、DNS、メール認証、ヘッダー、エッジ設定のためのCloudflareセキュリティ強化。",
			keywords: "Cloudflareセキュリティ強化, Cloudflare Pagesセキュリティ, Cloudflare DNSセキュリティ, Webサイトセキュリティヘッダー",
			serviceType: "Cloudflareセキュリティ強化",
			intent: "Cloudflareを利用中で、より厳格なヘッダー、整理されたDNS、安全なエッジルール、公開前の衛生管理が必要なサイト向け。",
			outcomes: [
				"偶発的な露出経路を減らした、より防御しやすいCloudflare構成。",
				"なりすましとブランド悪用リスクを下げるDNSおよびメールレコード。",
				"広いデフォルトではなく、アプリケーションに合わせたヘッダーとキャッシュ挙動。"
			],
			deliverables: [
				"DNSとプロキシ設定のレビュー",
				"静的/動的レスポンス向けセキュリティヘッダーポリシー",
				"SPF、DKIM、DMARC、レポート用メールボックスの確認",
				"リダイレクトとcanonical URLのレビュー",
				"デプロイとロールバックのチェックリスト"
			],
			process: [
				{
					title: "棚卸し",
					description: "有効なDNSレコード、プロキシされたルート、リダイレクト、ヘッダー、デプロイ成果物を整理します。"
				},
				{
					title: "強化",
					description: "リスクを下げるために必要な最小限の変更で、レコード、ヘッダー、エッジルールを調整します。"
				},
				{
					title: "確認",
					description: "本番レスポンスを検証し、将来の変更に使える短い運用記録を残します。"
				}
			],
			proofPoints: [
				"Cloudflare Pagesヘッダーポリシー",
				"robots.txtとサイトマップの公開",
				"DMARCレポート用メールボックス対応"
			]
		},
		"zh-CN": {
			title: "Cloudflare 安全加固",
			shortTitle: "Cloudflare 加固",
			description: "面向网站、DNS、邮件认证、响应头和边缘配置的 Cloudflare 安全加固。",
			keywords: "Cloudflare 安全加固, Cloudflare Pages 安全, Cloudflare DNS 安全, 网站安全响应头",
			serviceType: "Cloudflare 安全加固",
			intent: "适用于已经使用 Cloudflare、但需要更严格响应头、更清晰 DNS、更安全边缘规则和更好上线卫生的站点。",
			outcomes: [
				"减少意外暴露路径、更加可防御的 Cloudflare 配置。",
				"降低伪造邮件和品牌滥用风险的 DNS 与邮件记录。",
				"与应用匹配的响应头和缓存行为，而不是依赖宽泛默认值。"
			],
			deliverables: [
				"DNS 与代理配置评审",
				"静态和动态响应的安全响应头策略",
				"SPF、DKIM、DMARC 与报告邮箱验证",
				"重定向与 canonical URL 评审",
				"部署与回滚清单"
			],
			process: [
				{
					title: "盘点",
					description: "梳理活跃 DNS 记录、代理路由、重定向、响应头和部署输出。"
				},
				{
					title: "收紧",
					description: "用最小但有效的变更调整记录、响应头和边缘规则以降低风险。"
				},
				{
					title: "确认",
					description: "验证线上响应，并保留简短的操作记录以支持未来变更。"
				}
			],
			proofPoints: [
				"Cloudflare Pages 响应头策略",
				"Robots 与 sitemap 发布",
				"DMARC 报告邮箱支持"
			]
		},
		es: {
			title: "Endurecimiento de seguridad en Cloudflare",
			shortTitle: "Cloudflare Hardening",
			description: "Endurecimiento de Cloudflare para sitios web, DNS, autenticación de correo, cabeceras y configuración edge.",
			keywords: "Cloudflare security hardening, seguridad Cloudflare Pages, seguridad DNS Cloudflare, cabeceras de seguridad web",
			serviceType: "Endurecimiento de seguridad Cloudflare",
			intent: "Para sitios que ya usan Cloudflare y necesitan cabeceras más estrictas, DNS más limpio, reglas edge más seguras y mejor higiene de lanzamiento.",
			outcomes: [
				"Una configuración Cloudflare más defendible con menos rutas de exposición accidental.",
				"Registros DNS y de correo que reducen spoofing y abuso de marca.",
				"Cabeceras y caché ajustadas a la aplicación, no a valores por defecto demasiado amplios."
			],
			deliverables: [
				"Revisión de DNS y configuración proxy",
				"Política de cabeceras para respuestas estáticas y dinámicas",
				"Verificación de SPF, DKIM, DMARC y mailbox de reportes",
				"Revisión de redirects y URL canonical",
				"Checklist de despliegue y rollback"
			],
			process: [
				{
					title: "Inventariar",
					description: "Mapeamos registros DNS activos, rutas proxied, redirects, cabeceras y salidas de despliegue."
				},
				{
					title: "Ajustar",
					description: "Ajustamos registros, cabeceras y reglas edge con los cambios mínimos necesarios para reducir riesgo."
				},
				{
					title: "Confirmar",
					description: "Verificamos respuestas en vivo y capturamos un registro operativo breve para cambios futuros."
				}
			],
			proofPoints: [
				"Política de cabeceras en Cloudflare Pages",
				"Publicación de robots y sitemap",
				"Soporte de mailbox para reportes DMARC"
			]
		},
		fr: {
			title: "Durcissement de sécurité Cloudflare",
			shortTitle: "Durcissement Cloudflare",
			description: "Durcissement Cloudflare pour sites web, DNS, authentification e-mail, en-têtes et configuration edge.",
			keywords: "durcissement Cloudflare, sécurité Cloudflare Pages, sécurité DNS Cloudflare, en-têtes de sécurité web",
			serviceType: "Durcissement de sécurité Cloudflare",
			intent: "Pour les sites déjà sur Cloudflare qui nécessitent des en-têtes plus stricts, un DNS plus propre, des règles edge plus sûres et une meilleure hygiène de lancement.",
			outcomes: [
				"Une configuration Cloudflare plus défendable avec moins de chemins d’exposition accidentelle.",
				"Des enregistrements DNS et e-mail qui réduisent le spoofing et l’abus de marque.",
				"Un comportement d’en-têtes et de cache aligné sur l’application, pas sur des valeurs par défaut trop larges."
			],
			deliverables: [
				"Revue de configuration DNS et proxy",
				"Politique d’en-têtes de sécurité pour réponses statiques et dynamiques",
				"Vérification SPF, DKIM, DMARC et boîte de reporting",
				"Revue des redirections et URL canonical",
				"Checklist de déploiement et rollback"
			],
			process: [
				{
					title: "Inventorier",
					description: "Nous cartographions les DNS actifs, routes proxifiées, redirections, en-têtes et artefacts de déploiement."
				},
				{
					title: "Resserrer",
					description: "Nous ajustons records, en-têtes et règles edge avec les plus petits changements utiles pour réduire le risque."
				},
				{
					title: "Confirmer",
					description: "Nous vérifions les réponses live et conservons une trace opérationnelle courte pour les changements futurs."
				}
			],
			proofPoints: [
				"Politique d’en-têtes Cloudflare Pages",
				"Publication robots et sitemap",
				"Support de boîte de reporting DMARC"
			]
		},
		ko: {
			title: "Cloudflare 보안 하드닝",
			shortTitle: "Cloudflare 하드닝",
			description: "웹사이트, DNS, 이메일 인증, 헤더, 엣지 구성을 위한 Cloudflare 보안 하드닝.",
			keywords: "Cloudflare 보안 하드닝, Cloudflare Pages 보안, Cloudflare DNS 보안, 웹사이트 보안 헤더",
			serviceType: "Cloudflare 보안 하드닝",
			intent: "Cloudflare를 이미 사용하며 더 엄격한 헤더, 정리된 DNS, 안전한 엣지 규칙, 나은 출시 위생이 필요한 사이트를 위한 서비스입니다.",
			outcomes: [
				"우발적 노출 경로가 줄어든 더 방어 가능한 Cloudflare 구성.",
				"스푸핑과 브랜드 남용 위험을 낮추는 DNS 및 이메일 레코드.",
				"넓은 기본값이 아니라 애플리케이션에 맞는 헤더와 캐시 동작."
			],
			deliverables: [
				"DNS 및 프록시 구성 검토",
				"정적/동적 응답을 위한 보안 헤더 정책",
				"SPF, DKIM, DMARC 및 보고 메일함 검증",
				"리디렉션과 canonical URL 검토",
				"배포 및 롤백 체크리스트"
			],
			process: [
				{
					title: "인벤토리",
					description: "활성 DNS 레코드, 프록시 라우트, 리디렉션, 헤더, 배포 산출물을 매핑합니다."
				},
				{
					title: "강화",
					description: "위험을 줄이는 데 필요한 최소 변경으로 레코드, 헤더, 엣지 규칙을 조정합니다."
				},
				{
					title: "확인",
					description: "라이브 응답을 검증하고 향후 변경을 위한 짧은 운영 기록을 남깁니다."
				}
			],
			proofPoints: [
				"Cloudflare Pages 헤더 정책",
				"robots 및 sitemap 게시",
				"DMARC 보고 메일함 지원"
			]
		}
	},
	"react-security-audit": {
		tr: {
			title: "React Güvenlik Denetimi",
			shortTitle: "React Güvenlik Denetimi",
			description: "Frontend kod tabanları, iletişim formları, routing, metadata, bağımlılık riski ve istemci tarafı açıklıkları için React güvenlik denetimleri.",
			keywords: "React güvenlik denetimi, frontend güvenlik denetimi, TypeScript güvenlik incelemesi, web uygulama güvenlik denetimi",
			serviceType: "React güvenlik denetimi",
			intent: "Halihazırda React uygulaması olan ve lansman ya da yatırımcı/müşteri incelemesi öncesi odaklı bir değerlendirme isteyen ekipler için.",
			outcomes: [
				"Mühendisliğin doğrudan görevlere dönüştürebileceği kısa ve uygulanabilir bir denetim raporu.",
				"Açıkta kalan secret, güvensiz render, zayıf form kontrolü ve routing hatalarından kaynaklanan riskin azalması.",
				"Test edilmiş metadata, erişilebilirlik ve görünür güven sayfalarıyla daha güçlü güvenilirlik."
			],
			deliverables: [
				"İstemci tarafı kod ve rota incelemesi",
				"Bağımlılık ve build yapılandırması incelemesi",
				"Form kötüye kullanımı ve bot kontrolü incelemesi",
				"SEO ve structured data sağlama kontrolü",
				"Risk öncelikli düzeltme planı"
			],
			process: [
				{
					title: "İncele",
					description: "Kod tabanını, dağıtım yapılandırmasını ve canlı davranışı kullanıcı kontrollü verilere odaklanarak okuruz."
				},
				{
					title: "Test et",
					description: "Mevcut kontrolleri çalıştırır, pahalıya mal olacak hatalar için odaklı assertion’lar ekleriz."
				},
				{
					title: "Raporla",
					description: "Düzeltmeleri dosya, URL ve doğrulama adımlarıyla birlikte öncelik sırasına göre dokümante ederiz."
				}
			],
			proofPoints: [
				"TypeScript no-emit kontrolleri",
				"Vitest rota ve utility testleri",
				"Kritik sayfalar için tarayıcı doğrulaması"
			]
		},
		de: {
			title: "React Security Audit",
			shortTitle: "React Security Audit",
			description: "React-Sicherheitsaudits für Frontend-Codebases, Kontaktformulare, Routing, Metadata, Dependency Risk und Client-Side Exposure.",
			keywords: "React Security Audit, Frontend Security Audit, TypeScript Security Review, Web Application Security Audit",
			serviceType: "React Security Audit",
			intent: "Für Teams mit bestehender React-Anwendung, die vor Launch oder Investor-/Kundenprüfung ein fokussiertes Review brauchen.",
			outcomes: [
				"Ein kurzer, umsetzbarer Auditbericht, den Engineering direkt in Tickets übersetzen kann.",
				"Reduziertes Risiko durch exposed Secrets, unsicheres Rendering, schwache Form Controls und Routing-Fehler.",
				"Mehr Glaubwürdigkeit durch getestete Metadata, Accessibility und sichtbare Trust-Seiten."
			],
			deliverables: [
				"Clientseitiger Code- und Routenreview",
				"Dependency- und Build-Konfigurationsreview",
				"Review von Form Abuse und Bot Controls",
				"SEO- und Structured-Data-Sanity-Check",
				"Risikogewichteter Remediation-Plan"
			],
			process: [
				{
					title: "Review",
					description: "Wir lesen Codebase, Deployment-Konfiguration und Live-Verhalten mit Fokus auf nutzergesteuerte Daten."
				},
				{
					title: "Testen",
					description: "Wir führen vorhandene Checks aus und ergänzen fokussierte Assertions für teure Fehlerfälle."
				},
				{
					title: "Berichten",
					description: "Wir dokumentieren Fixes priorisiert mit konkreten Dateien, URLs und Verifikationsschritten."
				}
			],
			proofPoints: [
				"TypeScript no-emit Checks",
				"Vitest Routen- und Utility-Tests",
				"Browser-Verifizierung kritischer Seiten"
			]
		},
		ja: {
			title: "Reactセキュリティ監査",
			shortTitle: "Reactセキュリティ監査",
			description: "フロントエンドコードベース、問い合わせフォーム、ルーティング、メタデータ、依存関係リスク、クライアント側露出を対象にしたReactセキュリティ監査。",
			keywords: "Reactセキュリティ監査, フロントエンドセキュリティ監査, TypeScriptセキュリティレビュー, Webアプリケーションセキュリティ監査",
			serviceType: "Reactセキュリティ監査",
			intent: "既存のReactアプリケーションを持ち、公開前または投資家/顧客レビュー前に焦点を絞った確認が必要なチーム向け。",
			outcomes: [
				"エンジニアリングがチケット化しやすい、短く実行可能な監査レポート。",
				"露出したsecret、安全でないレンダリング、弱いフォーム制御、ルーティングミスによるリスクの低減。",
				"検証済みのメタデータ、アクセシビリティ、信頼ページによる信用度の向上。"
			],
			deliverables: [
				"クライアント側コードとルートのレビュー",
				"依存関係とビルド設定のレビュー",
				"フォーム悪用とbot対策のレビュー",
				"SEOと構造化データの健全性チェック",
				"リスク順の修正計画"
			],
			process: [
				{
					title: "レビュー",
					description: "ユーザー制御データに注意しながら、コードベース、デプロイ設定、ライブ挙動を確認します。"
				},
				{
					title: "テスト",
					description: "既存チェックを実行し、失敗コストが高い箇所に焦点を絞った検証を追加します。"
				},
				{
					title: "報告",
					description: "修正を優先順に、対象ファイル、URL、検証手順とともに文書化します。"
				}
			],
			proofPoints: [
				"TypeScript no-emitチェック",
				"Vitestによるルートとユーティリティのテスト",
				"主要ページのブラウザ検証"
			]
		},
		"zh-CN": {
			title: "React 安全审计",
			shortTitle: "React 安全审计",
			description: "面向前端代码库、联系表单、路由、元数据、依赖风险和客户端暴露的 React 安全审计。",
			keywords: "React 安全审计, 前端安全审计, TypeScript 安全评审, Web 应用安全审计",
			serviceType: "React 安全审计",
			intent: "适用于已经拥有 React 应用、并希望在上线或投资人/客户评审前进行聚焦审查的团队。",
			outcomes: [
				"工程团队可以直接转化为任务的简短可执行审计报告。",
				"降低暴露 secret、不安全渲染、薄弱表单控制和路由错误带来的风险。",
				"通过已测试元数据、可访问性和可见信任页面提升可信度。"
			],
			deliverables: [
				"客户端代码与路由评审",
				"依赖与构建配置评审",
				"表单滥用与 bot 控制评审",
				"SEO 与结构化数据健全性检查",
				"按风险排序的修复计划"
			],
			process: [
				{
					title: "审查",
					description: "围绕用户可控数据阅读代码库、部署配置和线上行为。"
				},
				{
					title: "测试",
					description: "运行现有检查，并在高代价失败点补充聚焦断言。"
				},
				{
					title: "报告",
					description: "按优先级记录修复项，包括具体文件、URL 和验证步骤。"
				}
			],
			proofPoints: [
				"TypeScript no-emit 检查",
				"Vitest 路由与工具测试",
				"关键页面浏览器验证"
			]
		},
		es: {
			title: "Auditoría de seguridad React",
			shortTitle: "Auditoría React",
			description: "Auditorías de seguridad React para frontends, formularios de contacto, routing, metadata, dependencias y exposición del cliente.",
			keywords: "auditoría seguridad React, auditoría seguridad frontend, revisión seguridad TypeScript, auditoría seguridad web",
			serviceType: "Auditoría de seguridad React",
			intent: "Para equipos que ya tienen una aplicación React y necesitan una revisión enfocada antes de lanzamiento o evaluación de clientes/inversores.",
			outcomes: [
				"Un informe corto y accionable que ingeniería puede convertir en tickets.",
				"Menor riesgo por secretos expuestos, render inseguro, formularios débiles y errores de routing.",
				"Mayor credibilidad mediante metadata, accesibilidad y páginas de confianza verificadas."
			],
			deliverables: [
				"Revisión de código cliente y rutas",
				"Revisión de dependencias y configuración de build",
				"Revisión de abuso de formularios y controles bot",
				"Check de SEO y datos estructurados",
				"Plan de remediación priorizado por riesgo"
			],
			process: [
				{
					title: "Revisar",
					description: "Leemos código, configuración de despliegue y comportamiento en vivo con foco en datos controlados por usuarios."
				},
				{
					title: "Probar",
					description: "Ejecutamos checks existentes y añadimos assertions enfocadas donde un fallo sería costoso."
				},
				{
					title: "Reportar",
					description: "Documentamos correcciones por prioridad, con archivos, URLs y pasos de verificación."
				}
			],
			proofPoints: [
				"Checks TypeScript no-emit",
				"Tests Vitest para rutas y utilidades",
				"Verificación de navegador en páginas clave"
			]
		},
		fr: {
			title: "Audit de sécurité React",
			shortTitle: "Audit sécurité React",
			description: "Audits de sécurité React pour codebases frontend, formulaires, routing, métadonnées, dépendances et exposition côté client.",
			keywords: "audit sécurité React, audit sécurité frontend, revue sécurité TypeScript, audit sécurité application web",
			serviceType: "Audit de sécurité React",
			intent: "Pour les équipes qui ont déjà une application React et veulent une revue ciblée avant lancement ou revue client/investisseur.",
			outcomes: [
				"Un rapport court et actionnable que l’ingénierie peut transformer en tickets.",
				"Réduction du risque lié aux secrets exposés, rendu non sûr, contrôles de formulaire faibles et erreurs de routing.",
				"Crédibilité renforcée grâce aux métadonnées, à l’accessibilité et aux pages de confiance vérifiées."
			],
			deliverables: [
				"Revue du code client et des routes",
				"Revue des dépendances et de la configuration build",
				"Revue des abus de formulaire et contrôles bot",
				"Vérification SEO et données structurées",
				"Plan de remédiation classé par risque"
			],
			process: [
				{
					title: "Revoir",
					description: "Nous lisons la codebase, la configuration de déploiement et le comportement live avec attention aux données contrôlées par l’utilisateur."
				},
				{
					title: "Tester",
					description: "Nous lançons les contrôles existants et ajoutons des assertions ciblées là où une erreur coûterait cher."
				},
				{
					title: "Rapporter",
					description: "Nous documentons les corrections par priorité avec fichiers, URLs et étapes de vérification."
				}
			],
			proofPoints: [
				"Contrôles TypeScript no-emit",
				"Tests Vitest de routes et utilitaires",
				"Vérification navigateur des pages clés"
			]
		},
		ko: {
			title: "React 보안 감사",
			shortTitle: "React 보안 감사",
			description: "프론트엔드 코드베이스, 문의 폼, 라우팅, 메타데이터, 의존성 위험, 클라이언트 노출을 위한 React 보안 감사.",
			keywords: "React 보안 감사, 프론트엔드 보안 감사, TypeScript 보안 검토, 웹 애플리케이션 보안 감사",
			serviceType: "React 보안 감사",
			intent: "이미 React 애플리케이션을 보유하고 있으며 출시 전 또는 투자자/고객 검토 전에 집중 리뷰가 필요한 팀을 위한 서비스입니다.",
			outcomes: [
				"엔지니어링이 바로 티켓으로 전환할 수 있는 짧고 실행 가능한 감사 보고서.",
				"노출된 secret, 안전하지 않은 렌더링, 약한 폼 제어, 라우팅 실수로 인한 위험 감소.",
				"검증된 메타데이터, 접근성, 신뢰 페이지를 통한 신뢰도 향상."
			],
			deliverables: [
				"클라이언트 코드 및 라우트 검토",
				"의존성 및 빌드 설정 검토",
				"폼 남용 및 봇 제어 검토",
				"SEO 및 구조화 데이터 점검",
				"위험도 기반 개선 계획"
			],
			process: [
				{
					title: "검토",
					description: "사용자 제어 데이터에 주의하며 코드베이스, 배포 구성, 라이브 동작을 읽습니다."
				},
				{
					title: "테스트",
					description: "기존 검사를 실행하고 실패 비용이 큰 부분에 집중 assertion을 추가합니다."
				},
				{
					title: "보고",
					description: "파일, URL, 검증 단계와 함께 수정 사항을 우선순위대로 문서화합니다."
				}
			],
			proofPoints: [
				"TypeScript no-emit 검사",
				"Vitest 라우트 및 유틸리티 테스트",
				"핵심 페이지 브라우저 검증"
			]
		}
	},
	"backend-api-hardening": {
		tr: {
			title: "Backend API Güçlendirmesi",
			shortTitle: "Backend API Güçlendirmesi",
			description: "Kimlik doğrulama, yetkilendirme, doğrulama, rate limit, loglama ve dağıtım hazırlığı için backend ve API güçlendirmesi.",
			keywords: "backend API güçlendirme, API güvenliği, backend güvenlik incelemesi, Node API güvenliği, bulut API güvenliği",
			serviceType: "Backend API güçlendirmesi",
			intent: "Müşterilere, iş ortaklarına, panellere veya herkese açık iletişim iş akışlarına API açan ekipler için.",
			outcomes: [
				"Daha net yetkilendirme sınırlarına ve daha güvenli input işleme mantığına sahip API rotaları.",
				"İletişim, lead, giriş ve operasyonel endpointleri koruyan kötüye kullanım kontrolleri.",
				"Gelecekteki regresyonları yakalamayı kolaylaştıran operasyonel kontroller."
			],
			deliverables: [
				"API rota ve veri akışı incelemesi",
				"Kimlik doğrulama ve yetkilendirme sınırı incelemesi",
				"Validation, rate limit ve abuse-control yönlendirmesi",
				"Loglama ve incident-readiness kontrol listesi",
				"Kritik rotalar için CI uyumlu regresyon kontrolleri"
			],
			process: [
				{
					title: "Haritala",
					description: "Public rotaları, ayrıcalıklı rotaları, dış entegrasyonları ve veri yollarını belirleriz."
				},
				{
					title: "Azalt",
					description: "Gereksiz açıklıkları kaldırır ve kötüye kullanılma ihtimali en yüksek rotalara kontrol ekleriz."
				},
				{
					title: "İzle",
					description: "Lansman sonrası sorunların görünür olması için pratik loglama ve doğrulama ekleriz."
				}
			],
			proofPoints: [
				"İletişim endpoint doğrulaması",
				"Destek ve güvenlik için e-posta alias yönlendirmesi",
				"Güvenlik odaklı lansman kontrol listesi"
			]
		},
		de: {
			title: "Backend API Hardening",
			shortTitle: "Backend API Hardening",
			description: "Backend- und API-Härtung für Authentifizierung, Autorisierung, Validierung, Rate Limits, Logging und Deployment-Readiness.",
			keywords: "Backend API Hardening, API Security, Backend Security Review, Node API Security, Cloud API Hardening",
			serviceType: "Backend API Hardening",
			intent: "Für Teams, die APIs für Kunden, Partnerintegrationen, Dashboards oder öffentliche Kontakt-Workflows öffnen.",
			outcomes: [
				"API-Routen mit klareren Autorisierungsgrenzen und sichererem Input Handling.",
				"Abuse Controls zum Schutz von Kontakt-, Lead-, Login- und operativen Endpunkten.",
				"Operative Checks, die spätere Regressionen leichter sichtbar machen."
			],
			deliverables: [
				"Review von API-Routen und Datenflüssen",
				"Review von Authentifizierungs- und Autorisierungsgrenzen",
				"Guidance zu Validierung, Rate Limiting und Abuse Controls",
				"Logging- und Incident-Readiness-Checkliste",
				"CI-freundliche Regression-Checks für kritische Routen"
			],
			process: [
				{
					title: "Kartieren",
					description: "Wir identifizieren öffentliche Routen, privilegierte Routen, externe Integrationen und Datenpfade."
				},
				{
					title: "Reduzieren",
					description: "Wir entfernen vermeidbare Exposition und setzen Kontrollen um die am ehesten missbrauchbaren Routen."
				},
				{
					title: "Überwachen",
					description: "Wir ergänzen praktisches Logging und Verifikation, damit Probleme nach Launch sichtbar sind."
				}
			],
			proofPoints: [
				"Kontakt-Endpunkt-Verifikation",
				"E-Mail-Alias-Routing für Support und Security",
				"Security-fokussierte Launch-Checkliste"
			]
		},
		ja: {
			title: "Backend API強化",
			shortTitle: "Backend API強化",
			description: "認証、認可、バリデーション、レート制限、ログ、本番準備のためのBackend/API強化。",
			keywords: "Backend API強化, APIセキュリティ, Backendセキュリティレビュー, Node APIセキュリティ, クラウドAPI強化",
			serviceType: "Backend API強化",
			intent: "顧客、パートナー連携、ダッシュボード、公開問い合わせフローへAPIを公開するチーム向け。",
			outcomes: [
				"認可境界が明確で、入力処理がより安全なAPIルート。",
				"問い合わせ、リード、ログイン、運用エンドポイントを守る悪用対策。",
				"将来のリグレッションを検出しやすくする運用チェック。"
			],
			deliverables: [
				"APIルートとデータフローのレビュー",
				"認証/認可境界のレビュー",
				"バリデーション、レート制限、悪用対策の指針",
				"ログとインシデント準備チェックリスト",
				"重要ルート向けCI対応リグレッションチェック"
			],
			process: [
				{
					title: "把握",
					description: "公開ルート、特権ルート、外部連携、データ経路を特定します。"
				},
				{
					title: "削減",
					description: "避けられる露出を減らし、悪用されやすいルートに制御を追加します。"
				},
				{
					title: "監視",
					description: "公開後の問題を見える化するため、実用的なログと検証を追加します。"
				}
			],
			proofPoints: [
				"問い合わせエンドポイント検証",
				"サポートとセキュリティ向けメールエイリアスルーティング",
				"セキュリティ重視の公開チェックリスト"
			]
		},
		"zh-CN": {
			title: "Backend API 加固",
			shortTitle: "Backend API 加固",
			description: "面向认证、授权、校验、限流、日志和部署准备的后端与 API 加固。",
			keywords: "Backend API 加固, API 安全, 后端安全评审, Node API 安全, 云 API 加固",
			serviceType: "Backend API 加固",
			intent: "适用于向客户、合作伙伴集成、控制台或公开联系工作流开放 API 的团队。",
			outcomes: [
				"拥有更清晰授权边界和更安全输入处理的 API 路由。",
				"保护联系、线索、登录和运营端点的滥用控制。",
				"让未来回归问题更容易被捕获的运营检查。"
			],
			deliverables: [
				"API 路由与数据流评审",
				"认证与授权边界评审",
				"校验、限流与滥用控制指导",
				"日志与事件准备清单",
				"关键路由的 CI 友好回归检查"
			],
			process: [
				{
					title: "映射",
					description: "识别公开路由、特权路由、外部集成和数据路径。"
				},
				{
					title: "减少",
					description: "移除可避免暴露，并为最可能被滥用的路由增加控制。"
				},
				{
					title: "监控",
					description: "加入实用日志与验证，让上线后的问题可见。"
				}
			],
			proofPoints: [
				"联系端点验证",
				"支持与安全邮箱别名路由",
				"安全导向上线清单"
			]
		},
		es: {
			title: "Endurecimiento de Backend API",
			shortTitle: "Backend API Hardening",
			description: "Endurecimiento de backend y APIs para autenticación, autorización, validación, rate limits, logging y preparación de despliegue.",
			keywords: "endurecimiento backend API, seguridad API, revisión seguridad backend, seguridad Node API, hardening API cloud",
			serviceType: "Endurecimiento Backend API",
			intent: "Para equipos que exponen APIs a clientes, integraciones, dashboards o flujos públicos de contacto.",
			outcomes: [
				"Rutas API con límites de autorización más claros y manejo de input más seguro.",
				"Controles antiabuso para proteger endpoints de contacto, leads, login y operación.",
				"Checks operativos que facilitan detectar regresiones futuras."
			],
			deliverables: [
				"Revisión de rutas API y flujos de datos",
				"Revisión de límites de autenticación y autorización",
				"Guía de validación, rate limiting y controles antiabuso",
				"Checklist de logging y preparación ante incidentes",
				"Checks de regresión compatibles con CI para rutas críticas"
			],
			process: [
				{
					title: "Mapear",
					description: "Identificamos rutas públicas, rutas privilegiadas, integraciones externas y caminos de datos."
				},
				{
					title: "Reducir",
					description: "Eliminamos exposición evitable y añadimos controles alrededor de las rutas con mayor probabilidad de abuso."
				},
				{
					title: "Monitorizar",
					description: "Añadimos logging y verificación práctica para que los problemas sean visibles tras el lanzamiento."
				}
			],
			proofPoints: [
				"Verificación de endpoint de contacto",
				"Routing de alias de correo para soporte y seguridad",
				"Checklist de lanzamiento centrada en seguridad"
			]
		},
		fr: {
			title: "Durcissement Backend API",
			shortTitle: "Durcissement Backend API",
			description: "Durcissement backend et API pour authentification, autorisation, validation, rate limits, logs et préparation au déploiement.",
			keywords: "durcissement backend API, sécurité API, revue sécurité backend, sécurité Node API, durcissement API cloud",
			serviceType: "Durcissement Backend API",
			intent: "Pour les équipes exposant des API à des clients, intégrations partenaires, dashboards ou workflows publics de contact.",
			outcomes: [
				"Des routes API avec frontières d’autorisation plus claires et traitement des entrées plus sûr.",
				"Des contrôles anti-abus protégeant contact, lead, login et endpoints opérationnels.",
				"Des contrôles opérationnels qui rendent les futures régressions plus faciles à détecter."
			],
			deliverables: [
				"Revue des routes API et flux de données",
				"Revue des frontières d’authentification et d’autorisation",
				"Guidance validation, rate limiting et contrôles anti-abus",
				"Checklist logs et préparation incident",
				"Contrôles de régression compatibles CI pour routes critiques"
			],
			process: [
				{
					title: "Cartographier",
					description: "Nous identifions routes publiques, routes privilégiées, intégrations externes et chemins de données."
				},
				{
					title: "Réduire",
					description: "Nous supprimons l’exposition évitable et ajoutons des contrôles autour des routes les plus exposées aux abus."
				},
				{
					title: "Surveiller",
					description: "Nous ajoutons logs et vérifications pratiques pour rendre les problèmes visibles après lancement."
				}
			],
			proofPoints: [
				"Vérification de l’endpoint contact",
				"Routage des alias e-mail support et sécurité",
				"Checklist de lancement orientée sécurité"
			]
		},
		ko: {
			title: "Backend API 하드닝",
			shortTitle: "Backend API 하드닝",
			description: "인증, 권한 부여, 검증, rate limit, 로깅, 배포 준비를 위한 백엔드 및 API 하드닝.",
			keywords: "Backend API 하드닝, API 보안, 백엔드 보안 검토, Node API 보안, 클라우드 API 하드닝",
			serviceType: "Backend API 하드닝",
			intent: "고객, 파트너 통합, 대시보드 또는 공개 문의 워크플로에 API를 노출하는 팀을 위한 서비스입니다.",
			outcomes: [
				"더 명확한 권한 경계와 더 안전한 입력 처리를 갖춘 API 라우트.",
				"문의, 리드, 로그인, 운영 엔드포인트를 보호하는 남용 방지 제어.",
				"미래 회귀를 더 쉽게 잡아내는 운영 검사."
			],
			deliverables: [
				"API 라우트 및 데이터 흐름 검토",
				"인증 및 권한 경계 검토",
				"검증, rate limiting, abuse-control 지침",
				"로깅 및 incident-readiness 체크리스트",
				"핵심 라우트용 CI 친화 회귀 검사"
			],
			process: [
				{
					title: "매핑",
					description: "공개 라우트, 권한 라우트, 외부 통합, 데이터 경로를 식별합니다."
				},
				{
					title: "축소",
					description: "피할 수 있는 노출을 제거하고 남용 가능성이 높은 라우트 주변에 제어를 추가합니다."
				},
				{
					title: "모니터링",
					description: "출시 후 문제가 보이도록 실용적인 로깅과 검증을 추가합니다."
				}
			],
			proofPoints: [
				"문의 엔드포인트 검증",
				"지원 및 보안 이메일 별칭 라우팅",
				"보안 중심 출시 체크리스트"
			]
		}
	}
};
//#endregion
//#region src/data/growthServices.ts
var englishGrowthServiceContent = {
	"cybersecurity-consulting": {
		title: "Cybersecurity Consulting for Web Platforms",
		shortTitle: "Cybersecurity Consulting",
		description: "Practical cybersecurity consulting for web applications, APIs, cloud edges, and public-facing business systems.",
		keywords: "cybersecurity consulting, web application security consulting, API security consulting, cloud security consultant",
		serviceType: "Cybersecurity consulting",
		intent: "For teams that need a clear security plan before launching, scaling, or exposing a new web system.",
		outcomes: [
			"A prioritized security roadmap tied to business risk and implementation cost.",
			"Concrete fixes for authentication, authorization, data exposure, headers, and abuse controls.",
			"A sharper security posture that can be explained to customers, partners, and auditors."
		],
		deliverables: [
			"Architecture and threat-model review",
			"Risk-ranked findings with remediation notes",
			"Security header, DNS, and email authentication review",
			"Launch readiness checklist for production systems",
			"Follow-up implementation support for critical fixes"
		],
		process: [
			{
				title: "Assess",
				description: "Review the live surface, repository structure, authentication flows, API boundaries, DNS, and deployment platform."
			},
			{
				title: "Prioritize",
				description: "Separate urgent exposure from hardening work so engineering time is spent where it changes risk."
			},
			{
				title: "Harden",
				description: "Implement or guide fixes, then verify them with repeatable checks that can stay in CI."
			}
		],
		proofPoints: [
			"Security.txt disclosure workflow",
			"SPF, DKIM, and DMARC alignment",
			"Strict security headers and no wildcard CORS policy in static headers"
		]
	},
	"secure-web-development": {
		title: "Secure Web Development Services",
		shortTitle: "Secure Web Development",
		description: "Secure React, TypeScript, and API development for teams that need production-grade web applications.",
		keywords: "secure web development, secure React development, secure TypeScript development, production web application security",
		serviceType: "Secure web development",
		intent: "For founders and teams that need a web product built with security, performance, and maintainability from the start.",
		outcomes: [
			"A fast web application with clear trust signals, strong metadata, and production deployment discipline.",
			"Frontend and backend boundaries that reduce common injection, abuse, and data-leak risks.",
			"A codebase that future engineers can understand, test, and extend."
		],
		deliverables: [
			"React and TypeScript application development",
			"Security-aware contact, lead, and account workflows",
			"SEO, accessibility, and structured data implementation",
			"CI checks for type safety, tests, build, and dependency risk",
			"Deployment support for Cloudflare Pages, Vercel, or similar platforms"
		],
		process: [
			{
				title: "Shape",
				description: "Define the product surface, critical conversion paths, trust requirements, and launch constraints."
			},
			{
				title: "Build",
				description: "Ship the application in small, reviewable changes with security and accessibility checks included."
			},
			{
				title: "Verify",
				description: "Run build, route, metadata, and browser checks before public release."
			}
		],
		proofPoints: [
			"Server-side prerendered pages",
			"Canonical and hreflang metadata",
			"Contact workflows routed to company email aliases"
		]
	},
	"cloudflare-security-hardening": {
		title: "Cloudflare Security Hardening",
		shortTitle: "Cloudflare Hardening",
		description: "Cloudflare security hardening for websites, DNS, email authentication, headers, and edge configuration.",
		keywords: "Cloudflare security hardening, Cloudflare Pages security, Cloudflare DNS security, website security headers",
		serviceType: "Cloudflare security hardening",
		intent: "For sites already using Cloudflare that need tighter headers, cleaner DNS, safer edge rules, and better launch hygiene.",
		outcomes: [
			"A more defensible Cloudflare configuration with fewer accidental exposure paths.",
			"DNS and email records that reduce spoofing and brand-abuse risk.",
			"Headers and cache behavior that match the application instead of relying on broad defaults."
		],
		deliverables: [
			"DNS and proxy configuration review",
			"Security header policy for static and dynamic responses",
			"SPF, DKIM, DMARC, and reporting mailbox verification",
			"Redirect and canonical URL review",
			"Deployment and rollback checklist"
		],
		process: [
			{
				title: "Inventory",
				description: "Map active DNS records, proxied routes, redirects, headers, and deployment outputs."
			},
			{
				title: "Tighten",
				description: "Adjust records, headers, and edge rules with the smallest changes required to reduce risk."
			},
			{
				title: "Confirm",
				description: "Verify live responses and capture a short operational record for future changes."
			}
		],
		proofPoints: [
			"Cloudflare Pages header policy",
			"Robots and sitemap publication",
			"DMARC reporting mailbox support"
		]
	},
	"react-security-audit": {
		title: "React Security Audit",
		shortTitle: "React Security Audit",
		description: "React security audits for frontend codebases, contact forms, routing, metadata, dependency risk, and client-side exposure.",
		keywords: "React security audit, frontend security audit, TypeScript security review, web application security audit",
		serviceType: "React security audit",
		intent: "For teams that already have a React application and need a focused review before launch or investor/customer review.",
		outcomes: [
			"A short, actionable audit report that engineering can turn into tickets.",
			"Reduced risk from exposed secrets, unsafe rendering, weak form controls, and routing mistakes.",
			"Improved credibility through tested metadata, accessibility, and visible trust pages."
		],
		deliverables: [
			"Client-side code and route review",
			"Dependency and build configuration review",
			"Form abuse and bot-control review",
			"SEO and structured data sanity check",
			"Risk-ranked remediation plan"
		],
		process: [
			{
				title: "Review",
				description: "Read the codebase, deployment configuration, and live behavior with attention to user-controlled data."
			},
			{
				title: "Test",
				description: "Run the existing checks and add focused assertions where a failure would be costly."
			},
			{
				title: "Report",
				description: "Document the fixes in priority order, including exact files, URLs, and verification steps."
			}
		],
		proofPoints: [
			"TypeScript no-emit checks",
			"Vitest route and utility tests",
			"Browser verification for key pages"
		]
	},
	"backend-api-hardening": {
		title: "Backend API Hardening",
		shortTitle: "Backend API Hardening",
		description: "Backend and API hardening for authentication, authorization, validation, rate limits, logging, and deployment readiness.",
		keywords: "backend API hardening, API security, backend security review, Node API security, cloud API hardening",
		serviceType: "Backend API hardening",
		intent: "For teams exposing APIs to customers, partner integrations, dashboards, or public contact workflows.",
		outcomes: [
			"API routes with clearer authorization boundaries and safer input handling.",
			"Abuse controls that protect contact, lead, login, and operational endpoints.",
			"Operational checks that make future regressions easier to catch."
		],
		deliverables: [
			"API route and data-flow review",
			"Authentication and authorization boundary review",
			"Validation, rate limiting, and abuse-control guidance",
			"Logging and incident-readiness checklist",
			"CI-friendly regression checks for critical routes"
		],
		process: [
			{
				title: "Map",
				description: "Identify public routes, privileged routes, external integrations, and data paths."
			},
			{
				title: "Reduce",
				description: "Remove avoidable exposure and add controls around the routes most likely to be abused."
			},
			{
				title: "Monitor",
				description: "Add practical logging and verification so issues are visible after launch."
			}
		],
		proofPoints: [
			"Contact endpoint verification",
			"Email alias routing for support and security",
			"Security-focused launch checklist"
		]
	}
};
var growthServicePages = [
	{
		slug: "cybersecurity-consulting",
		relatedArticleSlugs: [
			"security-headers-cloudflare-pages-react",
			"spf-dkim-dmarc-google-workspace-security-domain",
			"vulnerability-disclosure-security-txt-website"
		]
	},
	{
		slug: "secure-web-development",
		relatedArticleSlugs: ["react-contact-form-spam-abuse-hardening", "security-headers-cloudflare-pages-react"]
	},
	{
		slug: "cloudflare-security-hardening",
		relatedArticleSlugs: ["security-headers-cloudflare-pages-react", "spf-dkim-dmarc-google-workspace-security-domain"]
	},
	{
		slug: "react-security-audit",
		relatedArticleSlugs: ["react-contact-form-spam-abuse-hardening", "security-headers-cloudflare-pages-react"]
	},
	{
		slug: "backend-api-hardening",
		relatedArticleSlugs: ["react-contact-form-spam-abuse-hardening", "vulnerability-disclosure-security-txt-website"]
	}
];
growthServicePages.map((service) => service.slug);
function getGrowthServicePage(slug) {
	if (!slug) return;
	return growthServicePages.find((service) => service.slug === slug);
}
function localizeGrowthServicePage(service, language) {
	const fallbackContent = englishGrowthServiceContent[service.slug];
	if (!fallbackContent) throw new Error(`Missing English growth service content for slug: ${service.slug}`);
	const content = (language === "en" ? fallbackContent : growthServiceTranslations[service.slug]?.[language]) ?? fallbackContent;
	return {
		...service,
		...content
	};
}
function getLocalizedGrowthServicePage(slug, language) {
	const service = getGrowthServicePage(slug);
	return service ? localizeGrowthServicePage(service, language) : void 0;
}
//#endregion
//#region src/lib/schema.ts
var SITE_URL = normalizeSiteUrl(DEFAULT_SITE_URL);
var ORGANIZATION_ID = `${SITE_URL}/#organization`;
function absoluteUrl(path, language) {
	return `${SITE_URL}${normalizeCanonicalPath(localizePath(path, language))}`;
}
var LABELS = {
	tr: {
		home: "Ana Sayfa",
		services: "Hizmetler",
		projects: "Acik Kaynak Projeler",
		completedProjects: "Tamamlanan Projeler",
		terms: "Kullanim Kosullari",
		privacy: "Gizlilik Politikasi",
		cookies: "Cerez Tercihleri",
		contact: "Iletisim",
		security: "Guvenlik",
		engineering: "Muhendislik",
		status: "Durum",
		changelog: "Degisiklikler",
		articles: "Makaleler",
		notFound: "Sayfa Bulunamadi",
		serviceDetails: {
			"secure-frontend": "Guvenli Frontend",
			"hardened-backend": "Guclendirilmis Backend",
			"data-protection": "Veri Koruma",
			"high-performance": "Yuksek Performans"
		}
	},
	en: {
		home: "Home",
		services: "Services",
		projects: "Open Source Projects",
		completedProjects: "Completed Projects",
		terms: "Terms of Service",
		privacy: "Privacy Policy",
		cookies: "Cookie Preferences",
		contact: "Contact",
		security: "Security",
		engineering: "Engineering",
		status: "Status",
		changelog: "Changelog",
		articles: "Articles",
		notFound: "Not Found",
		serviceDetails: {
			"secure-frontend": "Secure Frontend",
			"hardened-backend": "Hardened Backend",
			"data-protection": "Data Protection",
			"high-performance": "High Performance"
		}
	},
	de: {
		home: "Startseite",
		services: "Leistungen",
		projects: "Open Source Projekte",
		completedProjects: "Referenzen",
		terms: "Nutzungsbedingungen",
		privacy: "Datenschutz",
		cookies: "Cookie-Einstellungen",
		contact: "Kontakt",
		security: "Sicherheit",
		engineering: "Engineering",
		status: "Status",
		changelog: "Changelog",
		articles: "Artikel",
		notFound: "Nicht gefunden",
		serviceDetails: {
			"secure-frontend": "Sicheres Frontend",
			"hardened-backend": "Gehaertetes Backend",
			"data-protection": "Datenschutz",
			"high-performance": "Hohe Performance"
		}
	},
	ja: {
		home: "ホーム",
		services: "サービス",
		projects: "オープンソースプロジェクト",
		completedProjects: "完了プロジェクト",
		terms: "利用規約",
		privacy: "プライバシーポリシー",
		cookies: "Cookie設定",
		contact: "お問い合わせ",
		security: "セキュリティ",
		engineering: "エンジニアリング",
		status: "ステータス",
		changelog: "変更履歴",
		articles: "記事",
		notFound: "見つかりません",
		serviceDetails: {
			"secure-frontend": "セキュアフロントエンド",
			"hardened-backend": "強化バックエンド",
			"data-protection": "データ保護",
			"high-performance": "高性能"
		}
	},
	"zh-CN": {
		home: "首页",
		services: "服务",
		projects: "开源项目",
		completedProjects: "已完成项目",
		terms: "服务条款",
		privacy: "隐私政策",
		cookies: "Cookie 偏好",
		contact: "联系",
		security: "安全",
		engineering: "工程",
		status: "状态",
		changelog: "更新日志",
		articles: "文章",
		notFound: "未找到",
		serviceDetails: {
			"secure-frontend": "安全前端",
			"hardened-backend": "加固后端",
			"data-protection": "数据保护",
			"high-performance": "高性能"
		}
	},
	es: {
		home: "Inicio",
		services: "Servicios",
		projects: "Proyectos open source",
		completedProjects: "Proyectos completados",
		terms: "Términos del servicio",
		privacy: "Política de privacidad",
		cookies: "Preferencias de cookies",
		contact: "Contacto",
		security: "Seguridad",
		engineering: "Ingeniería",
		status: "Estado",
		changelog: "Cambios",
		articles: "Artículos",
		notFound: "No encontrado",
		serviceDetails: {
			"secure-frontend": "Frontend seguro",
			"hardened-backend": "Backend endurecido",
			"data-protection": "Protección de datos",
			"high-performance": "Alto rendimiento"
		}
	},
	fr: {
		home: "Accueil",
		services: "Services",
		projects: "Projets open source",
		completedProjects: "Projets terminés",
		terms: "Conditions d’utilisation",
		privacy: "Politique de confidentialité",
		cookies: "Préférences cookies",
		contact: "Contact",
		security: "Sécurité",
		engineering: "Ingénierie",
		status: "Statut",
		changelog: "Journal des changements",
		articles: "Articles",
		notFound: "Introuvable",
		serviceDetails: {
			"secure-frontend": "Frontend sécurisé",
			"hardened-backend": "Backend durci",
			"data-protection": "Protection des données",
			"high-performance": "Haute performance"
		}
	},
	ko: {
		home: "홈",
		services: "서비스",
		projects: "오픈소스 프로젝트",
		completedProjects: "완료 프로젝트",
		terms: "서비스 약관",
		privacy: "개인정보 처리방침",
		cookies: "쿠키 설정",
		contact: "문의",
		security: "보안",
		engineering: "엔지니어링",
		status: "상태",
		changelog: "변경 내역",
		articles: "아티클",
		notFound: "찾을 수 없음",
		serviceDetails: {
			"secure-frontend": "안전한 프론트엔드",
			"hardened-backend": "하드닝된 백엔드",
			"data-protection": "데이터 보호",
			"high-performance": "고성능"
		}
	}
};
function buildBreadcrumbItems(pathname, language) {
	const logical = stripLanguagePrefix(pathname).replace(/\/+$/, "") || "/";
	const labels = LABELS[language];
	if (logical === "/") return null;
	const home = {
		name: labels.home,
		path: "/"
	};
	if (logical === "/services") return [home, {
		name: labels.services,
		path: "/services/"
	}];
	const serviceMatch = logical.match(/^\/services\/([^/]+)$/);
	if (serviceMatch) {
		const slug = serviceMatch[1];
		const detailLabel = labels.serviceDetails[slug] ?? getLocalizedGrowthServicePage(slug, language)?.shortTitle;
		if (!detailLabel) return null;
		return [
			home,
			{
				name: labels.services,
				path: "/services/"
			},
			{
				name: detailLabel,
				path: `/services/${slug}/`
			}
		];
	}
	if (logical === "/projects") return [home, {
		name: labels.projects,
		path: "/projects/"
	}];
	const projectMatch = logical.match(/^\/projects\/([^/]+)$/);
	if (projectMatch) return [
		home,
		{
			name: labels.projects,
			path: "/projects/"
		},
		{
			name: projectMatch[1],
			path: `/projects/${projectMatch[1]}/`
		}
	];
	if (logical === "/articles") return [home, {
		name: labels.articles,
		path: "/articles/"
	}];
	const articleMatch = logical.match(/^\/articles\/([^/]+)$/);
	if (articleMatch) {
		const article = getLocalizedArticle(articleMatch[1], language);
		if (!article) return null;
		return [
			home,
			{
				name: labels.articles,
				path: "/articles/"
			},
			{
				name: article.title,
				path: `/articles/${article.slug}/`
			}
		];
	}
	if (logical === "/completed-projects") return [home, {
		name: labels.completedProjects,
		path: "/completed-projects/"
	}];
	const completedMatch = logical.match(/^\/completed-projects\/([^/]+)$/);
	if (completedMatch) return [
		home,
		{
			name: labels.completedProjects,
			path: "/completed-projects/"
		},
		{
			name: completedMatch[1],
			path: `/completed-projects/${completedMatch[1]}/`
		}
	];
	if (logical === "/terms") return [home, {
		name: labels.terms,
		path: "/terms/"
	}];
	if (logical === "/privacy") return [home, {
		name: labels.privacy,
		path: "/privacy/"
	}];
	if (logical === "/cookies") return [home, {
		name: labels.cookies,
		path: "/cookies/"
	}];
	if (logical === "/contact") return [home, {
		name: labels.contact,
		path: "/contact/"
	}];
	if (logical === "/security") return [home, {
		name: labels.security,
		path: "/security/"
	}];
	if (logical === "/engineering") return [home, {
		name: labels.engineering,
		path: "/engineering/"
	}];
	if (logical === "/status") return [home, {
		name: labels.status,
		path: "/status/"
	}];
	if (logical === "/changelog") return [home, {
		name: labels.changelog,
		path: "/changelog/"
	}];
	if (logical === "/not-found") return [home, {
		name: labels.notFound,
		path: "/not-found/"
	}];
	return null;
}
function buildBreadcrumbSchema(pathname, language, siteUrl, localizeForSchema) {
	const items = buildBreadcrumbItems(pathname, language);
	if (!items) return null;
	return {
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: `${siteUrl}${localizeForSchema(item.path)}`
		}))
	};
}
function buildServiceSchema({ name, description, path, language, serviceType }) {
	return {
		"@type": "Service",
		name,
		description,
		url: absoluteUrl(path, language),
		serviceType,
		provider: { "@id": ORGANIZATION_ID },
		areaServed: "Worldwide",
		inLanguage: language
	};
}
function buildArticleSchema({ title, description, path, language, publishedAt, updatedAt, keywords }) {
	return {
		"@type": "Article",
		headline: title,
		description,
		url: absoluteUrl(path, language),
		mainEntityOfPage: absoluteUrl(path, language),
		datePublished: publishedAt,
		dateModified: updatedAt,
		author: { "@id": ORGANIZATION_ID },
		publisher: { "@id": ORGANIZATION_ID },
		inLanguage: language,
		...keywords && keywords.length > 0 ? { keywords: keywords.join(", ") } : {}
	};
}
function buildSoftwareSourceCodeSchema({ name, description, path, language, codeRepository, programmingLanguage }) {
	const node = {
		"@type": "SoftwareSourceCode",
		name,
		description,
		url: absoluteUrl(path, language),
		author: { "@id": ORGANIZATION_ID },
		maintainer: { "@id": ORGANIZATION_ID },
		inLanguage: language
	};
	if (codeRepository) node.codeRepository = codeRepository;
	if (programmingLanguage && programmingLanguage.length > 0) node.programmingLanguage = programmingLanguage;
	return node;
}
//#endregion
//#region src/components/SEO.tsx
function normalizeSchemaItems(schema) {
	if (!schema) return [];
	return Array.isArray(schema) ? schema : [schema];
}
function SEO({ title = "Kernel Guard | Secure Web Development & Cybersecurity", description = "Kernel Guard specializes in building high-performance, secure web applications, hardened backend architectures, and post-quantum cryptography solutions.", keywords, type = "website", name = "Kernel Guard", image = "/og/default.svg", imageAlt = "Kernel Guard - Secure & Scalable Web Engineering", path, noIndex = false, noFollow = false, schema, alternateLanguages = SUPPORTED_LANGUAGES }) {
	const { language } = useLanguage();
	const location = (0, import_dist.useLocation)();
	const currentPath = normalizeCanonicalPath(path || location.pathname);
	const siteUrl = normalizeSiteUrl(DEFAULT_SITE_URL);
	const canonicalUrl = buildCanonicalUrl(siteUrl, currentPath);
	const robotsContent = noIndex ? noFollow ? "noindex, nofollow" : "noindex, follow" : noFollow ? "index, nofollow" : "index, follow";
	const ogLocales = {
		tr: "tr_TR",
		en: "en_US",
		de: "de_DE",
		ja: "ja_JP",
		"zh-CN": "zh_CN",
		es: "es_ES",
		fr: "fr_FR",
		ko: "ko_KR"
	};
	const locale = ogLocales[language];
	const activeAlternateLanguages = alternateLanguages.length > 0 ? alternateLanguages : [language];
	const alternateLocales = activeAlternateLanguages.filter((lang) => lang !== language).map((lang) => ogLocales[lang]);
	const logicalPath = stripLanguagePrefix(currentPath);
	const alternateUrls = activeAlternateLanguages.map((lang) => ({
		language: lang,
		hrefLang: LANGUAGE_HREFLANGS[lang],
		url: buildCanonicalUrl(siteUrl, normalizeCanonicalPath(localizePath(logicalPath, lang)))
	}));
	const defaultLanguage = activeAlternateLanguages.includes("tr") ? "tr" : activeAlternateLanguages[0];
	const defaultUrl = alternateUrls.find((alternate) => alternate.language === defaultLanguage)?.url ?? canonicalUrl;
	const absoluteImage = image.startsWith("http") ? image : `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`;
	const schemaItems = normalizeSchemaItems(schema);
	const shouldRenderStructuredData = typeof window === "undefined";
	const organizationId = `${siteUrl}/#organization`;
	const websiteId = `${siteUrl}/#website`;
	const breadcrumb = buildBreadcrumbSchema(currentPath, language, siteUrl, (p) => normalizeCanonicalPath(localizePath(p, language)));
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": organizationId,
				name,
				url: `${siteUrl}/`,
				logo: absoluteImage,
				email: SITE_EMAILS.contact,
				contactPoint: [
					{
						"@type": "ContactPoint",
						contactType: "customer support",
						email: SITE_EMAILS.support,
						areaServed: "Worldwide",
						availableLanguage: ["English", "Turkish"]
					},
					{
						"@type": "ContactPoint",
						contactType: "sales",
						email: SITE_EMAILS.sales,
						areaServed: "Worldwide",
						availableLanguage: ["English", "Turkish"]
					},
					{
						"@type": "ContactPoint",
						contactType: "security",
						email: SITE_EMAILS.security,
						areaServed: "Worldwide",
						availableLanguage: ["English", "Turkish"]
					},
					{
						"@type": "ContactPoint",
						contactType: "privacy",
						email: SITE_EMAILS.privacy,
						areaServed: "Worldwide",
						availableLanguage: ["English", "Turkish"]
					}
				],
				sameAs: ["https://github.com/Kernel-Guard"]
			},
			{
				"@type": "WebSite",
				"@id": websiteId,
				url: `${siteUrl}/`,
				name,
				inLanguage: language,
				publisher: { "@id": organizationId }
			},
			{
				"@type": "WebPage",
				"@id": `${canonicalUrl}#webpage`,
				url: canonicalUrl,
				name: title,
				description,
				inLanguage: language,
				isPartOf: { "@id": websiteId },
				...breadcrumb ? { breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` } } : {}
			},
			...breadcrumb ? [{
				...breadcrumb,
				"@id": `${canonicalUrl}#breadcrumb`
			}] : [],
			...schemaItems
		]
	};
	return /* @__PURE__ */ jsxs(Helmet, {
		htmlAttributes: { lang: language },
		children: [
			/* @__PURE__ */ jsx("title", { children: title }),
			/* @__PURE__ */ jsx("meta", {
				name: "description",
				content: description
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "robots",
				content: robotsContent
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "googlebot",
				content: robotsContent
			}),
			null,
			/* @__PURE__ */ jsx("link", {
				rel: "canonical",
				href: canonicalUrl
			}),
			alternateUrls.map((alternate) => /* @__PURE__ */ jsx("link", {
				rel: "alternate",
				hrefLang: alternate.hrefLang,
				href: alternate.url
			}, alternate.hrefLang)),
			/* @__PURE__ */ jsx("link", {
				rel: "alternate",
				hrefLang: "x-default",
				href: defaultUrl
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:url",
				content: canonicalUrl
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:type",
				content: type
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:title",
				content: title
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:description",
				content: description
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:site_name",
				content: name
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image",
				content: absoluteImage
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image:width",
				content: "1200"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image:height",
				content: "630"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image:alt",
				content: imageAlt
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:locale",
				content: locale
			}),
			alternateLocales.map((alternateLocale) => /* @__PURE__ */ jsx("meta", {
				property: "og:locale:alternate",
				content: alternateLocale
			}, alternateLocale)),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:creator",
				content: "@kernelguard"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:site",
				content: "@kernelguard"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:card",
				content: "summary_large_image"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:title",
				content: title
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:description",
				content: description
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:image",
				content: absoluteImage
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:image:alt",
				content: imageAlt
			}),
			shouldRenderStructuredData ? /* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				children: JSON.stringify(structuredData)
			}) : null
		]
	});
}
//#endregion
export { getLocalizedGrowthServicePage as a, articles as c, HelmetProvider as d, buildSoftwareSourceCodeSchema as i, getLocalizedArticle as l, buildArticleSchema as n, growthServicePages as o, buildServiceSchema as r, localizeGrowthServicePage as s, SEO as t, localizeArticle as u };
