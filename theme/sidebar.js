import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/editor/": [
    '/editor/README.md',
    '/editor/editor.md',
    '/editor/enumerations.md',
    '/editor/aliase.md',
    {
      text: '类(Classes)',
      prefix: '/editor/classes/',
      collapsible: true,
      children: [
        'ApplyUpdateResult',
        'BareFontInfo',
        'ConfigurationChangedEvent',
        'FindMatch',
        'FontInfo',
        'LineRange',
        'LineRangeMapping',
        'RangeMapping',
        'TextModelResolvedOptions'
      ]
    },
    {
      text: '接口(Interfaces)',
      prefix: '/editor/interfaces/',
      collapsible: true,
      children: [
        "BracketPairColorizationOptions",
        "EditorLayoutInfo",
        "EditorMinimapLayoutInfo",
        "EditorWrappingInfo",
        "IActionDescriptor",
        "IBaseMouseTarget",
        "IBracketPairColorizationOptions",
        "IChange",
        "ICharChange",
        "ICodeEditor",
        "ICodeEditorOpener",
        "ICodeEditorViewState",
        "IColorizerElementOptions",
        "IColorizerOptions",
        "ICommand",
        "ICommandDescriptor",
        "ICommandHandler",
        "IComputedEditorOptions",
        "IContentSizeChangedEvent",
        "IContentWidget",
        "IContentWidgetPosition",
        "IContextKey",
        "ICursorPositionChangedEvent",
        "ICursorSelectionChangedEvent",
        "ICursorState",
        "ICursorStateComputer",
        "ICursorStateComputerData",
        "IDecorationOptions",
        "IDiffEditor",
        "IDiffEditorBaseOptions",
        "IDiffEditorConstructionOptions",
        "IDiffEditorModel",
        "IDiffEditorOptions",
        "IDiffEditorViewState",
        "IDiffLineInformation",
        "IDiffNavigator",
        "IDiffNavigatorOptions",
        "IDimension",
        "IDocumentDiff",
        "IDocumentDiffProvider",
        "IDocumentDiffProviderOptions",
        "IDropIntoEditorOptions",
        "IEditOperationBuilder",
        "IEditor",
        "IEditorAction",
        "IEditorCommentsOptions",
        "IEditorConstructionOptions",
        "IEditorContribution",
        "IEditorDecorationsCollection",
        "IEditorFindOptions",
        "IEditorHoverOptions",
        "IEditorInlayHintsOptions",
        "IEditorLightbulbOptions",
        "IEditorMinimapOptions",
        "IEditorMouseEvent",
        "IEditorOption",
        "IEditorOptions",
        "IEditorOverrideServices",
        "IEditorPaddingOptions",
        "IEditorParameterHintOptions",
        "IEditorScrollbarOptions",
        "IEditorStickyScrollOptions",
        "IEditorZoom",
        "IGlobalEditorOptions",
        "IGotoLocationOptions",
        "IGuidesOptions",
        "IIdentifiedSingleEditOperation",
        "IInlineSuggestOptions",
        "IKeybindingRule",
        "ILineChange",
        "ILinkOpener",
        "IMarker",
        "IMarkerData",
        "IModelChangedEvent",
        "IModelContentChange",
        "IModelContentChangedEvent",
        "IModelDecoration",
        "IModelDecorationGlyphMarginOptions",
        "IModelDecorationMinimapOptions",
        "IModelDecorationOptions",
        "IModelDecorationOverviewRulerOptions",
        "IModelDecorationsChangedEvent",
        "IModelDeltaDecoration",
        "IModelLanguageChangedEvent",
        "IModelLanguageConfigurationChangedEvent",
        "IModelOptionsChangedEvent",
        "IMouseTargetContentEmpty",
        "IMouseTargetContentEmptyData",
        "IMouseTargetContentText",
        "IMouseTargetContentTextData",
        "IMouseTargetContentWidget",
        "IMouseTargetMargin",
        "IMouseTargetMarginData",
        "IMouseTargetOutsideEditor",
        "IMouseTargetOverlayWidget",
        "IMouseTargetOverviewRuler",
        "IMouseTargetScrollbar",
        "IMouseTargetTextarea",
        "IMouseTargetUnknown",
        "IMouseTargetViewZone",
        "IMouseTargetViewZoneData",
        "INewScrollPosition",
        "IOverlayWidget",
        "IOverlayWidgetPosition",
        "IPartialEditorMouseEvent",
        "IPasteAsOptions",
        "IPasteEvent",
        "IQuickSuggestionsOptions",
        "IRelatedInformation",
        "IRulerOption",
        "ISingleEditOperation",
        "ISmartSelectOptions",
        "IStandaloneCodeEditor",
        "IStandaloneDiffEditor",
        "IStandaloneDiffEditorConstructionOptions",
        "IStandaloneEditorConstructionOptions",
        "IStandaloneThemeData",
        "ISuggestOptions",
        "ITextModel",
        "ITextModelUpdateOptions",
        "ITextSnapshot",
        "ITokenThemeRule",
        "IUnicodeHighlightOptions",
        "IValidEditOperation",
        "IViewState",
        "IViewZone",
        "IViewZoneChangeAccessor",
        "IWebWorkerOptions",
        "IWordAtPosition",
        "InjectedTextOptions",
        "InternalEditorRenderLineNumbersOptions",
        "InternalEditorScrollbarOptions",
        "InternalQuickSuggestionsOptions",
        "MonacoWebWorker",
        "OverviewRulerPosition",
        "ThemeColor"
      ]
    },
    '/editor/appendix.md',
  ],
  "/language/": [
    '/language/README.md',
    '/language/language.md',
    '/language/enumerations.md',
    '/language/alias.md',
    {
      text: '类(Classes)',
      prefix: '/language/classes/',
      collapsible: true,
      children: [
        'FoldingRangeKind',
        'SelectedSuggestionInfo'
      ]
    },
    {
      text: '接口(Interfaces)',
      prefix: '/language/interfaces/',
      collapsible: true,
      children: [
        "CodeAction", 
        "CodeActionContext", 
        "CodeActionList", 
        "CodeActionProvider", 
        "CodeActionProviderMetadata", 
        "CodeLens", 
        "CodeLensList", 
        "CodeLensProvider", 
        "Command", 
        "CommentRule", 
        "CompletionContext", 
        "CompletionItem", 
        "CompletionItemLabel", 
        "CompletionItemProvider", 
        "CompletionItemRanges", 
        "CompletionList", 
        "DeclarationProvider", 
        "DefinitionProvider", 
        "DocumentColorProvider", 
        "DocumentFormattingEditProvider", 
        "DocumentHighlight", 
        "DocumentHighlightProvider", 
        "DocumentRangeFormattingEditProvider", 
        "DocumentRangeSemanticTokensProvider", 
        "DocumentSemanticTokensProvider", 
        "DocumentSymbol", 
        "DocumentSymbolProvider", 
        "EncodedTokensProvider", 
        "EnterAction", 
        "FoldingContext", 
        "FoldingMarkers", 
        "FoldingRange", 
        "FoldingRangeProvider", 
        "FoldingRules", 
        "FormattingOptions", 
        "Hover", 
        "HoverProvider", 
        "IAutoClosingPair", 
        "IAutoClosingPairConditional", 
        "IColor", 
        "IColorInformation", 
        "IColorPresentation", 
        "IDocComment", 
        "IEncodedLineTokens", 
        "IExpandedMonarchLanguageAction", 
        "IExpandedMonarchLanguageRule", 
        "ILanguageExtensionPoint", 
        "ILineTokens", 
        "ILink", 
        "ILinksList", 
        "IMonarchLanguage", 
        "IMonarchLanguageBracket", 
        "IRelativePattern", 
        "IState", 
        "IToken", 
        "IWorkspaceFileEdit", 
        "IWorkspaceTextEdit", 
        "ImplementationProvider", 
        "IndentationRule", 
        "InlayHint", 
        "InlayHintLabelPart", 
        "InlayHintList", 
        "InlayHintsProvider", 
        "InlineCompletion", 
        "InlineCompletionContext", 
        "InlineCompletions", 
        "InlineCompletionsProvider", 
        "LanguageConfiguration", 
        "LanguageFilter", 
        "LinkProvider", 
        "LinkedEditingRangeProvider", 
        "LinkedEditingRanges", 
        "Location", 
        "LocationLink", 
        "OnEnterRule", 
        "OnTypeFormattingEditProvider", 
        "ParameterInformation", 
        "ReferenceContext", 
        "ReferenceProvider", 
        "Rejection", 
        "RenameLocation", 
        "RenameProvider", 
        "SelectionRange", 
        "SelectionRangeProvider", 
        "SemanticTokens", 
        "SemanticTokensEdit", 
        "SemanticTokensEdits", 
        "SemanticTokensLegend", 
        "SignatureHelp", 
        "SignatureHelpContext", 
        "SignatureHelpProvider", 
        "SignatureHelpResult", 
        "SignatureInformation", 
        "TextEdit", 
        "TokensProvider", 
        "TokensProviderFactory", 
        "TypeDefinitionProvider", 
        "WorkspaceEdit", 
        "WorkspaceEditMetadata", 
        "WorkspaceFileEditOptions"
      ]
    }
  ],
  "/worker/": [
    "/worker/README.md",
    '/worker/worker.md',
    {
      text: '接口(Interfaces)',
      prefix: '/worker/interfaces/',
      collapsible: true,
      children: [
        'IMirrorModel',
        'IMirrorTextModel',
        'IWorkerContext'
      ]
    }
  ],
  "/example/": "structure"
});
