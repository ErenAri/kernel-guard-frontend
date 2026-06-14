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
//#region src/data/articles.ts
var import_dist = require_dist();
var articles = [
	{
		slug: "spf-dkim-dmarc-google-workspace-security-domain",
		title: "SPF, DKIM, and DMARC Setup for a Google Workspace Security Domain",
		description: "A practical guide to Google Workspace email authentication for company domains that need stronger trust and lower spoofing risk.",
		publishedAt: "2026-06-14",
		updatedAt: "2026-06-14",
		readingMinutes: 6,
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
		}],
		relatedServiceSlugs: ["cybersecurity-consulting", "cloudflare-security-hardening"]
	},
	{
		slug: "security-headers-cloudflare-pages-react",
		title: "Security Headers for Cloudflare Pages and React Sites",
		description: "How to use security headers, canonical metadata, and response verification to reduce common browser-side risks on static React deployments.",
		publishedAt: "2026-06-14",
		updatedAt: "2026-06-14",
		readingMinutes: 7,
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
		}],
		relatedServiceSlugs: [
			"cloudflare-security-hardening",
			"react-security-audit",
			"cybersecurity-consulting"
		]
	},
	{
		slug: "vulnerability-disclosure-security-txt-website",
		title: "Vulnerability Disclosure and security.txt for Company Websites",
		description: "A practical security.txt and vulnerability disclosure workflow for small companies that want a credible security contact path.",
		publishedAt: "2026-06-14",
		updatedAt: "2026-06-14",
		readingMinutes: 5,
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
		}],
		relatedServiceSlugs: ["cybersecurity-consulting", "backend-api-hardening"]
	},
	{
		slug: "react-contact-form-spam-abuse-hardening",
		title: "Hardening React Contact Forms Against Spam and Abuse",
		description: "How to protect a React contact page with validation, bot controls, routing discipline, and safer email handling.",
		publishedAt: "2026-06-14",
		updatedAt: "2026-06-14",
		readingMinutes: 6,
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
		}],
		relatedServiceSlugs: [
			"secure-web-development",
			"react-security-audit",
			"backend-api-hardening"
		]
	},
	{
		slug: "ebpf-compatibility-testing-ci",
		title: "eBPF Compatibility Testing in CI for Kernel-Sensitive Projects",
		description: "How compatibility reports, repeatable checks, and CI evidence help teams ship kernel-sensitive eBPF work with more confidence.",
		publishedAt: "2026-06-14",
		updatedAt: "2026-06-14",
		readingMinutes: 7,
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
		}],
		relatedServiceSlugs: ["cybersecurity-consulting"]
	}
];
articles.map((article) => article.slug);
function getArticle(slug) {
	if (!slug) return;
	return articles.find((article) => article.slug === slug);
}
//#endregion
//#region src/data/growthServices.ts
var growthServicePages = [
	{
		slug: "cybersecurity-consulting",
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
		],
		relatedArticleSlugs: [
			"security-headers-cloudflare-pages-react",
			"spf-dkim-dmarc-google-workspace-security-domain",
			"vulnerability-disclosure-security-txt-website"
		]
	},
	{
		slug: "secure-web-development",
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
		],
		relatedArticleSlugs: ["react-contact-form-spam-abuse-hardening", "security-headers-cloudflare-pages-react"]
	},
	{
		slug: "cloudflare-security-hardening",
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
		],
		relatedArticleSlugs: ["security-headers-cloudflare-pages-react", "spf-dkim-dmarc-google-workspace-security-domain"]
	},
	{
		slug: "react-security-audit",
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
		],
		relatedArticleSlugs: ["react-contact-form-spam-abuse-hardening", "security-headers-cloudflare-pages-react"]
	},
	{
		slug: "backend-api-hardening",
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
		],
		relatedArticleSlugs: ["react-contact-form-spam-abuse-hardening", "vulnerability-disclosure-security-txt-website"]
	}
];
growthServicePages.map((service) => service.slug);
function getGrowthServicePage(slug) {
	if (!slug) return;
	return growthServicePages.find((service) => service.slug === slug);
}
//#endregion
//#region src/lib/schema.ts
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
	articles: "Articles",
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
		articles: "Makaleler",
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
		articles: "Artikel",
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
		const detailLabel = labels.serviceDetails[slug] ?? getGrowthServicePage(slug)?.shortTitle;
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
		const article = getArticle(articleMatch[1]);
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
export { getGrowthServicePage as a, getArticle as c, buildSoftwareSourceCodeSchema as i, HelmetProvider as l, buildArticleSchema as n, growthServicePages as o, buildServiceSchema as r, articles as s, SEO as t };
