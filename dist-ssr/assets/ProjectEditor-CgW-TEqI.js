import { t as require_dist } from "./dist-BkMweq9c.js";
import { t as createLucideIcon } from "./createLucideIcon-d-ZGlwaX.js";
import { a as CircleAlert, i as LoaderCircle, n as useAdmin } from "./AdminContext-bpcRMjZm.js";
import { n as Plus, t as Trash2 } from "./trash-2-CDha8inF.js";
import { n as LANGUAGE_LABELS, r as SUPPORTED_LANGUAGES } from "./route-DZfXJ_2f.js";
import { i as ArrowLeft } from "../entry-server.js";
import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { v4 } from "uuid";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Image = createLucideIcon("image", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Save = createLucideIcon("save", [
	["path", {
		d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
		key: "1c8476"
	}],
	["path", {
		d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
		key: "1ydtos"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]);
//#endregion
//#region src/pages/Admin/ProjectEditor.tsx
var import_dist = require_dist();
var LANGUAGE_EDITOR_LABELS = {
	tr: "Turkish",
	en: "English",
	de: "German",
	ja: "Japanese",
	"zh-CN": "Chinese",
	es: "Spanish",
	fr: "French",
	ko: "Korean"
};
var emptyLocalizedText = () => Object.fromEntries(SUPPORTED_LANGUAGES.map((language) => [language, ""]));
function ProjectEditor() {
	const { type, id } = (0, import_dist.useParams)();
	const isNew = id === "new";
	const navigate = (0, import_dist.useNavigate)();
	const { service } = useAdmin();
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState("");
	const [formData, setFormData] = useState(null);
	const [fileSha, setFileSha] = useState("");
	const [allData, setAllData] = useState([]);
	const fileInputRef = useRef(null);
	const getFilePath = () => type === "open_source" ? "src/data/projects.json" : "src/data/completedProjects.json";
	const sanitizeAccounts = (accounts = []) => accounts.map(({ password, ...account }) => ({
		email: account.email || "",
		role: account.role || ""
	}));
	const sanitizeProject = (project) => type === "completed" ? {
		...project,
		accounts: sanitizeAccounts(project.accounts || [])
	} : project;
	useEffect(() => {
		const fetchProject = async () => {
			setLoading(true);
			try {
				if (!service) return;
				const res = await service.getJsonFile(getFilePath());
				setAllData(res.content.items || []);
				setFileSha(res.sha);
				if (isNew) {
					const base = {
						id: "",
						title: "",
						description: emptyLocalizedText(),
						tags: [],
						image: ""
					};
					if (type === "open_source") setFormData({
						...base,
						technicalDetails: emptyLocalizedText(),
						marketingDetails: emptyLocalizedText(),
						github: "",
						link: "",
						diagram: ""
					});
					else setFormData({
						...base,
						longDescription: emptyLocalizedText(),
						url: "",
						github: "",
						accounts: []
					});
				} else {
					const item = res.content.items?.find((i) => i.id === id);
					if (!item) throw new Error("Project not found");
					setFormData(sanitizeProject(JSON.parse(JSON.stringify(item))));
				}
			} catch (err) {
				setError(err.message || "Failed to fetch data");
			} finally {
				setLoading(false);
			}
		};
		fetchProject();
	}, [
		id,
		type,
		service,
		isNew
	]);
	const handleImageUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file || !service) return;
		setSaving(true);
		try {
			const reader = new FileReader();
			reader.onloadend = async () => {
				const base64 = reader.result;
				const filename = `${v4()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
				const urlPath = await service.uploadImage(filename, base64);
				setFormData((prev) => ({
					...prev,
					image: urlPath
				}));
				setSaving(false);
			};
			reader.readAsDataURL(file);
		} catch (err) {
			setError("Image upload failed: " + err.message);
			setSaving(false);
		}
	};
	const handleSave = async () => {
		if (!service) return;
		setSaving(true);
		setError("");
		try {
			if (!formData.id.trim() || !formData.title.trim()) throw new Error("ID and Title are required.");
			const updatedData = [...allData];
			if (isNew) {
				if (updatedData.find((i) => i.id === formData.id)) throw new Error("ID must be unique.");
				updatedData.push(sanitizeProject(formData));
			} else {
				const index = updatedData.findIndex((i) => i.id === id);
				if (index > -1) updatedData[index] = sanitizeProject(formData);
			}
			await service.updateJsonFile(getFilePath(), { items: updatedData }, `Update ${type} project: ${formData.id}`, fileSha);
			navigate("/admin");
		} catch (err) {
			setError(err.message || "Failed to save");
			setSaving(false);
		}
	};
	if (loading) return /* @__PURE__ */ jsx("div", {
		className: "py-12 text-center animate-pulse",
		children: "Loading data..."
	});
	if (error && !formData) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center py-12 gap-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3 p-4 border border-red-500/50 bg-red-500/10 text-red-500",
			children: [/* @__PURE__ */ jsx(CircleAlert, { className: "w-5 h-5 shrink-0" }), /* @__PURE__ */ jsx("span", { children: error })]
		}), /* @__PURE__ */ jsx(import_dist.Link, {
			to: "/admin",
			className: "text-primary hover:underline",
			children: "Return to Dashboard"
		})]
	});
	if (!formData) return null;
	const Input = ({ label, value, onChange, placeholder = "", disabled = false }) => /* @__PURE__ */ jsxs("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ jsx("label", {
			className: "block text-xs uppercase tracking-widest text-foreground/70 mb-2",
			children: label
		}), /* @__PURE__ */ jsx("input", {
			type: "text",
			value: value || "",
			onChange,
			placeholder,
			disabled,
			className: "w-full bg-background border border-border focus:border-primary text-foreground p-3 outline-none disabled:cursor-not-allowed disabled:opacity-60"
		})]
	});
	const TextArea = ({ label, value, onChange }) => /* @__PURE__ */ jsxs("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ jsx("label", {
			className: "block text-xs uppercase tracking-widest text-foreground/70 mb-2",
			children: label
		}), /* @__PURE__ */ jsx("textarea", {
			value: value || "",
			onChange,
			className: "w-full bg-background border border-border focus:border-primary text-foreground p-3 outline-none min-h-[100px] font-mono text-sm"
		})]
	});
	const setLocalizedField = (field, language, value) => {
		setFormData({
			...formData,
			[field]: {
				...formData[field] || {},
				[language]: value
			}
		});
	};
	const LocalizedTextAreas = ({ field, markdown = false }) => /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-1 md:grid-cols-2 gap-4",
		children: SUPPORTED_LANGUAGES.map((language) => /* @__PURE__ */ jsx(TextArea, {
			label: `${LANGUAGE_EDITOR_LABELS[language]} (${LANGUAGE_LABELS[language]})${markdown ? " Markdown" : ""}`,
			value: formData[field]?.[language],
			onChange: (e) => setLocalizedField(field, language, e.target.value)
		}, `${field}-${language}`))
	});
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between mb-8",
			children: [/* @__PURE__ */ jsxs(import_dist.Link, {
				to: "/admin",
				className: "text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 text-sm uppercase tracking-wider",
				children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), " Back to List"]
			}), /* @__PURE__ */ jsxs("button", {
				onClick: handleSave,
				disabled: saving,
				className: "flex items-center gap-2 px-6 py-2 kg-action-primary transition-colors uppercase tracking-wider disabled:opacity-50",
				children: [saving ? /* @__PURE__ */ jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsx(Save, { className: "w-4 h-4" }), saving ? "Committing..." : "Commit Changes"]
			})]
		}),
		error && /* @__PURE__ */ jsxs("div", {
			className: "flex items-start gap-3 p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm mb-8",
			children: [/* @__PURE__ */ jsx(CircleAlert, { className: "w-5 h-5 shrink-0" }), /* @__PURE__ */ jsx("span", { children: error })]
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-2 space-y-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "bg-surface border border-border p-6",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-lg font-light mb-6 uppercase tracking-widest border-b border-border pb-2",
							children: "Core Identity"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsx(Input, {
								label: "ID (Unique, no spaces)",
								value: formData.id,
								onChange: (e) => setFormData({
									...formData,
									id: e.target.value
								}),
								disabled: !isNew
							}), /* @__PURE__ */ jsx(Input, {
								label: "Project Title",
								value: formData.title,
								onChange: (e) => setFormData({
									...formData,
									title: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-xs uppercase tracking-widest text-foreground/70 mb-2 mt-4",
							children: "Short Description"
						}),
						/* @__PURE__ */ jsx(LocalizedTextAreas, { field: "description" })
					]
				}), type === "open_source" ? /* @__PURE__ */ jsxs("div", {
					className: "bg-surface border border-border p-6",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-lg font-light mb-6 uppercase tracking-widest border-b border-border pb-2",
							children: "Technical & Marketing"
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-xs uppercase tracking-widest text-foreground/70 mb-2 mt-4",
							children: "Technical Details (Markdown)"
						}),
						/* @__PURE__ */ jsx(LocalizedTextAreas, {
							field: "technicalDetails",
							markdown: true
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-xs uppercase tracking-widest text-foreground/70 mb-2 mt-4",
							children: "Marketing Details (Markdown)"
						}),
						/* @__PURE__ */ jsx(LocalizedTextAreas, {
							field: "marketingDetails",
							markdown: true
						})
					]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "bg-surface border border-border p-6",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-lg font-light mb-6 uppercase tracking-widest border-b border-border pb-2",
						children: "Long Description"
					}), /* @__PURE__ */ jsx(LocalizedTextAreas, {
						field: "longDescription",
						markdown: true
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "bg-surface border border-border p-6",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-lg font-light mb-6 uppercase tracking-widest border-b border-border pb-2",
							children: "Media & Links"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mb-6",
							children: [
								/* @__PURE__ */ jsx("label", {
									className: "block text-xs uppercase tracking-widest text-foreground/70 mb-2",
									children: "Project Image"
								}),
								formData.image && /* @__PURE__ */ jsxs("div", {
									className: "mb-4 relative group",
									children: [/* @__PURE__ */ jsx("img", {
										src: formData.image,
										alt: "Preview",
										className: "w-full h-auto border border-border"
									}), /* @__PURE__ */ jsx("button", {
										onClick: () => setFormData({
											...formData,
											image: ""
										}),
										className: "absolute top-2 right-2 bg-red-500 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity",
										children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
									})]
								}),
								/* @__PURE__ */ jsx("input", {
									type: "file",
									ref: fileInputRef,
									className: "hidden",
									accept: "image/*",
									onChange: handleImageUpload
								}),
								/* @__PURE__ */ jsxs("button", {
									onClick: () => fileInputRef.current?.click(),
									className: "w-full flex items-center justify-center gap-2 p-3 border border-dashed border-primary/50 text-primary hover:bg-primary/5 transition-colors",
									children: [/* @__PURE__ */ jsx(Image, { className: "w-4 h-4" }), saving ? "Uploading..." : "Upload Image to GitHub"]
								})
							]
						}),
						/* @__PURE__ */ jsx(Input, {
							label: "Tags (Comma separated)",
							value: formData.tags?.join(", "),
							onChange: (e) => setFormData({
								...formData,
								tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean)
							})
						}),
						/* @__PURE__ */ jsx(Input, {
							label: "GitHub Link",
							value: formData.github,
							onChange: (e) => setFormData({
								...formData,
								github: e.target.value
							})
						}),
						type === "open_source" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Input, {
							label: "Live Preview Link",
							value: formData.link,
							onChange: (e) => setFormData({
								...formData,
								link: e.target.value
							})
						}), /* @__PURE__ */ jsx(TextArea, {
							label: "Mermaid Diagram",
							value: formData.diagram,
							onChange: (e) => setFormData({
								...formData,
								diagram: e.target.value
							})
						})] }) : /* @__PURE__ */ jsx(Input, {
							label: "Project URL",
							value: formData.url,
							onChange: (e) => setFormData({
								...formData,
								url: e.target.value
							})
						})
					]
				}), type === "completed" && /* @__PURE__ */ jsxs("div", {
					className: "bg-surface border border-border p-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between mb-6 border-b border-border pb-2",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-lg font-light uppercase tracking-widest",
							children: "Test Accounts"
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => setFormData({
								...formData,
								accounts: [...formData.accounts || [], {
									email: "",
									role: ""
								}]
							}),
							className: "p-1 hover:bg-border transition-colors",
							children: /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" })
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: formData.accounts?.map((acc, idx) => /* @__PURE__ */ jsxs("div", {
							className: "p-4 border border-border bg-background relative",
							children: [
								/* @__PURE__ */ jsx("button", {
									onClick: () => {
										const newAcc = [...formData.accounts];
										newAcc.splice(idx, 1);
										setFormData({
											...formData,
											accounts: newAcc
										});
									},
									className: "absolute top-2 right-2 text-red-500 hover:text-red-400",
									children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ jsx("input", {
									type: "text",
									placeholder: "Email / Username",
									value: acc.email,
									onChange: (e) => {
										const newAcc = [...formData.accounts];
										newAcc[idx].email = e.target.value;
										setFormData({
											...formData,
											accounts: newAcc
										});
									},
									className: "w-full bg-transparent border-b border-border p-2 outline-none mb-2 text-sm"
								}),
								/* @__PURE__ */ jsx("input", {
									type: "text",
									placeholder: "Role (e.g. Admin)",
									value: acc.role,
									onChange: (e) => {
										const newAcc = [...formData.accounts];
										newAcc[idx].role = e.target.value;
										setFormData({
											...formData,
											accounts: newAcc
										});
									},
									className: "w-full bg-transparent border-b border-border p-2 outline-none text-sm"
								})
							]
						}, idx))
					})]
				})]
			})]
		})
	] });
}
//#endregion
export { ProjectEditor as default };
