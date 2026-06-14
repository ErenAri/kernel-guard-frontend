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
//#region src/lib/schema.ts
var import_dist = require_dist();
var SITE_URL = normalizeSiteUrl(DEFAULT_SITE_URL);
var ORGANIZATION_ID = `${SITE_URL}/#organization`;
function absoluteUrl(path, language) {
	return `${SITE_URL}${normalizeCanonicalPath(localizePath(path, language))}`;
}
var englishLabels = {
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
	notFound: "Not Found",
	serviceDetails: {
		"secure-frontend": "Secure Frontend",
		"hardened-backend": "Hardened Backend",
		"data-protection": "Data Protection",
		"high-performance": "High Performance"
	}
};
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
		notFound: "Sayfa Bulunamadi",
		serviceDetails: {
			"secure-frontend": "Guvenli Frontend",
			"hardened-backend": "Guclendirilmis Backend",
			"data-protection": "Veri Koruma",
			"high-performance": "Yuksek Performans"
		}
	},
	en: englishLabels,
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
		notFound: "Nicht gefunden",
		serviceDetails: {
			"secure-frontend": "Sicheres Frontend",
			"hardened-backend": "Gehaertetes Backend",
			"data-protection": "Datenschutz",
			"high-performance": "Hohe Performance"
		}
	},
	ja: englishLabels,
	"zh-CN": englishLabels,
	es: englishLabels,
	fr: englishLabels,
	ko: englishLabels
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
		const detailLabel = labels.serviceDetails[slug];
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
function SEO({ title = "Kernel Guard | Secure Web Development & Cybersecurity", description = "Kernel Guard specializes in building high-performance, secure web applications, hardened backend architectures, and post-quantum cryptography solutions.", keywords, type = "website", name = "Kernel Guard", image = "/og/default.svg", imageAlt = "Kernel Guard - Secure & Scalable Web Engineering", path, noIndex = false, noFollow = false, schema }) {
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
	const alternateLocales = SUPPORTED_LANGUAGES.filter((lang) => lang !== language).map((lang) => ogLocales[lang]);
	const logicalPath = stripLanguagePrefix(currentPath);
	const alternateUrls = SUPPORTED_LANGUAGES.map((lang) => ({
		language: lang,
		hrefLang: LANGUAGE_HREFLANGS[lang],
		url: buildCanonicalUrl(siteUrl, normalizeCanonicalPath(localizePath(logicalPath, lang)))
	}));
	const defaultUrl = alternateUrls.find((alternate) => alternate.language === "tr")?.url ?? canonicalUrl;
	const absoluteImage = image.startsWith("http") ? image : `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`;
	const schemaItems = normalizeSchemaItems(schema);
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
			/* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				children: JSON.stringify(structuredData)
			})
		]
	});
}
//#endregion
export { HelmetProvider as i, buildServiceSchema as n, buildSoftwareSourceCodeSchema as r, SEO as t };
