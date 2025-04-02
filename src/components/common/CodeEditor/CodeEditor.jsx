import React from "react";
import { useTranslation } from "react-i18next";
import "./CodeEditor.css";

const CodeEditor = () => {
	const { t } = useTranslation();

	return (
		<div className="code-editor-card">
			<div className="code-editor-header">
				<div className="editor-controls">
					<span className="editor-control"></span>
					<span className="editor-control"></span>
					<span className="editor-control"></span>
				</div>
				<div className="editor-title">araneum.js</div>
			</div>
			<div className="code-editor-body">
				<div className="code-line">
					<span className="code-comment">{t("codeEditor.comment")}</span>
				</div>
				<div className="code-line">
					<span className="code-keyword">class</span>
					<span className="code-class"> AraneumSolutions </span>
					{"{"}
				</div>
				<div className="code-line">
					<span className="code-indent"></span>
					<span className="code-keyword">constructor</span>() {"{"}
				</div>
				<div className="code-line">
					<span className="code-indent"></span>
					<span className="code-indent"></span>
					<span className="code-this">this</span>.technologies = [
					<span className="code-string">'Web'</span>,
					<span className="code-string"> 'Mobile'</span>,
					<span className="code-string"> 'Cloud'</span>];
				</div>
				<div className="code-line">
					<span className="code-indent"></span>
					<span className="code-indent"></span>
					<span className="code-this">this</span>.expertise = {"{"}
					<span className="code-property">years</span>:
					<span className="code-number"> 3</span>,
					<span className="code-property"> projects</span>:
					<span className="code-number"> 15+</span>
					{"}"};
				</div>
				<div className="code-line">
					<span className="code-indent"></span>
					{"}"}
				</div>
				<div className="code-line">
					<span className="code-indent"></span>
					<span className="code-function">createSolution</span>(
					<span className="code-param">client</span>) {"{"}
				</div>
				<div className="code-line">
					<span className="code-indent"></span>
					<span className="code-indent"></span>
					<span className="code-keyword">return</span> {"{"}
					<span className="code-property">innovation</span>:
					<span className="code-string"> 'Advanced'</span>,
				</div>
				<div className="code-line">
					<span className="code-indent"></span>
					<span className="code-indent"></span>
					<span className="code-property">quality</span>:
					<span className="code-string"> 'Exceptional'</span>,
				</div>
				<div className="code-line">
					<span className="code-indent"></span>
					<span className="code-indent"></span>
					<span className="code-property">support</span>:
					<span className="code-string"> '24/7'</span>
					{"}"};
				</div>
				<div className="code-line">
					<span className="code-indent"></span>
					{"}"}
				</div>
				<div className="code-line">{"}"}</div>
			</div>
		</div>
	);
};

export default CodeEditor;
