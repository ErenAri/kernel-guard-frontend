import { t as require_dist } from "./dist-BkMweq9c.js";
import { t as createLucideIcon } from "./createLucideIcon-d-ZGlwaX.js";
import { a as CircleAlert, i as LoaderCircle, n as useAdmin } from "./AdminContext-Cqb3MmQE.js";
import { t as LogOut } from "./log-out-ifISwOAG.js";
import { n as Plus, t as Trash2 } from "./trash-2-CDha8inF.js";
import { n as ExternalLink } from "../entry-server.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FolderCheck = createLucideIcon("folder-check", [["path", {
	d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
	key: "1kt360"
}], ["path", {
	d: "m9 13 2 2 4-4",
	key: "6343dt"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FolderGit2 = createLucideIcon("folder-git-2", [
	["path", {
		d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
		key: "1w6njk"
	}],
	["circle", {
		cx: "13",
		cy: "12",
		r: "2",
		key: "1j92g6"
	}],
	["path", {
		d: "M18 19c-2.8 0-5-2.2-5-5v8",
		key: "pkpw2h"
	}],
	["circle", {
		cx: "20",
		cy: "19",
		r: "2",
		key: "1obnsp"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
//#endregion
//#region src/pages/Admin/AdminDashboard.tsx
var import_dist = require_dist();
var LOGIN_ERROR_KEY = "kg_admin_login_error";
function AdminDashboard() {
	const { service, logout } = useAdmin();
	const navigate = (0, import_dist.useNavigate)();
	const [activeTab, setActiveTab] = useState("open_source");
	const [projects, setProjects] = useState([]);
	const [completedProjects, setCompletedProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [deletingId, setDeletingId] = useState("");
	const [error, setError] = useState("");
	const getFilePath = (tab) => tab === "open_source" ? "src/data/projects.json" : "src/data/completedProjects.json";
	const setItemsForTab = (tab, items) => {
		if (tab === "open_source") setProjects(items);
		else setCompletedProjects(items);
	};
	const loadData = async () => {
		setLoading(true);
		setError("");
		try {
			if (service) {
				const [projRes, compRes] = await Promise.all([service.getJsonFile("src/data/projects.json"), service.getJsonFile("src/data/completedProjects.json")]);
				setProjects(projRes.content.items || []);
				setCompletedProjects(compRes.content.items || []);
			}
		} catch (err) {
			const message = err instanceof Error ? err.message : "Failed to fetch data from GitHub.";
			if (message.toLowerCase().includes("invalid credentials") || message.toLowerCase().includes("unauthorized")) {
				sessionStorage.setItem(LOGIN_ERROR_KEY, "Email or password is incorrect.");
				logout();
				return;
			}
			setError(message);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		loadData();
	}, [service]);
	const handleLogout = async () => {
		await logout();
		navigate("/");
	};
	const handleDelete = async (item) => {
		if (!service || deletingId) return;
		if (!window.confirm(`Delete "${item.title || item.id}" from ${activeTab === "open_source" ? "Open Source" : "Completed"} projects?`)) return;
		const tab = activeTab;
		setDeletingId(item.id);
		setError("");
		try {
			const filePath = getFilePath(tab);
			const latest = await service.getJsonFile(filePath);
			const latestItems = latest.content.items || [];
			if (!latestItems.some((project) => project.id === item.id)) throw new Error("Project was not found in the latest remote data.");
			const updatedItems = latestItems.filter((project) => project.id !== item.id);
			await service.updateJsonFile(filePath, { items: updatedItems }, `Delete ${tab} project: ${item.id}`, latest.sha);
			setItemsForTab(tab, updatedItems);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to delete project.");
		} finally {
			setDeletingId("");
		}
	};
	const activeItems = activeTab === "open_source" ? projects : completedProjects;
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-light text-foreground uppercase tracking-widest",
				children: "Database Management"
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-4",
				children: [
					/* @__PURE__ */ jsxs("button", {
						onClick: handleLogout,
						className: "flex items-center gap-2 px-4 py-2 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white transition-colors text-sm uppercase tracking-wider",
						title: "Logout and return to site",
						children: [/* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", {
							className: "hidden sm:inline",
							children: "Logout"
						})]
					}),
					/* @__PURE__ */ jsxs("button", {
						onClick: loadData,
						className: "flex items-center gap-2 px-4 py-2 border border-border bg-surface text-foreground hover:bg-border transition-colors text-sm uppercase tracking-wider",
						disabled: loading,
						children: [/* @__PURE__ */ jsx(RefreshCw, { className: `w-4 h-4 ${loading ? "animate-spin" : ""}` }), "Sync"]
					}),
					/* @__PURE__ */ jsxs(import_dist.Link, {
						to: `/admin/edit/${activeTab}/new`,
						className: "flex items-center gap-2 px-4 py-2 kg-action-primary transition-colors text-sm uppercase tracking-wider",
						children: [/* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }), "New Entry"]
					})
				]
			})]
		}),
		error && /* @__PURE__ */ jsxs("div", {
			className: "flex items-start gap-3 p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm mb-8",
			children: [/* @__PURE__ */ jsx(CircleAlert, { className: "w-5 h-5 shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "font-semibold mb-1",
				children: "Synchronization Error"
			}), /* @__PURE__ */ jsx("p", { children: error })] })]
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "flex border-b border-border mb-8",
			children: [/* @__PURE__ */ jsxs("button", {
				onClick: () => setActiveTab("open_source"),
				className: `flex items-center gap-2 px-6 py-4 uppercase tracking-wider text-sm transition-colors ${activeTab === "open_source" ? "border-b-2 border-primary text-primary bg-surface" : "text-foreground/50 hover:text-foreground hover:bg-surface/50"}`,
				children: [/* @__PURE__ */ jsx(FolderGit2, { className: "w-4 h-4" }), "Open Source"]
			}), /* @__PURE__ */ jsxs("button", {
				onClick: () => setActiveTab("completed"),
				className: `flex items-center gap-2 px-6 py-4 uppercase tracking-wider text-sm transition-colors ${activeTab === "completed" ? "border-b-2 border-primary text-primary bg-surface" : "text-foreground/50 hover:text-foreground hover:bg-surface/50"}`,
				children: [/* @__PURE__ */ jsx(FolderCheck, { className: "w-4 h-4" }), "Completed"]
			})]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "space-y-4",
			children: loading ? /* @__PURE__ */ jsx("div", {
				className: "py-12 text-center text-foreground/50 text-sm uppercase tracking-widest animate-pulse",
				children: "Fetching remote state..."
			}) : activeItems.length === 0 ? /* @__PURE__ */ jsx("div", {
				className: "py-12 text-center border border-dashed border-border text-foreground/50 text-sm",
				children: "No entries found."
			}) : activeItems.map((item) => /* @__PURE__ */ jsxs("div", {
				className: "group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-surface border border-border hover:border-primary/50 transition-colors gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4",
					children: [item.image ? /* @__PURE__ */ jsx("img", {
						src: item.image,
						alt: item.title,
						className: "w-16 h-16 object-cover border border-border bg-background"
					}) : /* @__PURE__ */ jsx("div", {
						className: "w-16 h-16 flex items-center justify-center border border-border bg-background text-foreground/20",
						children: "NO IMG"
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-lg font-medium text-foreground mb-1",
						children: item.title
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex gap-2",
						children: [item.tags?.slice(0, 3).map((t) => /* @__PURE__ */ jsx("span", {
							className: "text-xs bg-background border border-border px-2 py-0.5 text-foreground/70",
							children: t
						}, t)), (item.tags?.length ?? 0) > 3 && /* @__PURE__ */ jsxs("span", {
							className: "text-xs text-foreground/50 px-1 py-0.5",
							children: ["+", (item.tags?.length ?? 0) - 3]
						})]
					})] })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 w-full sm:w-auto",
					children: [
						item.github && /* @__PURE__ */ jsx("a", {
							href: item.github,
							target: "_blank",
							rel: "noreferrer",
							className: "p-2 text-foreground/50 hover:text-primary transition-colors",
							title: "View Source",
							children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
						}),
						/* @__PURE__ */ jsx(import_dist.Link, {
							to: `/admin/edit/${activeTab}/${item.id}`,
							className: "w-full sm:w-auto text-center px-6 py-2 border border-primary text-primary hover:bg-primary-dark hover:text-white transition-colors text-sm uppercase tracking-wider",
							children: "Edit"
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => handleDelete(item),
							disabled: deletingId === item.id,
							className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white transition-colors text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed",
							title: "Delete project",
							children: [deletingId === item.id ? /* @__PURE__ */ jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }), "Delete"]
						})
					]
				})]
			}, item.id))
		})
	] });
}
//#endregion
export { AdminDashboard as default };
