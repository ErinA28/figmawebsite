
I’ll inspect the Figma file’s page structure, library assets, variables, and component pages. The available MCP surface may expose only part of Figma’s full variable/component metadata, so I’ll separate exact retrieved data from fields the tools don’t provide and won’t make code or file changes.

The file has no subscribed external libraries; its design system appears to live in its own primatives and components pages. The component page lists multiple state variants, and the primitives page names color and type scales. I’m now extracting exact token values and inspecting component property/relationship metadata; collection and mode details may remain unavailable if Figma doesn’t expose them through these endpoints.

One limitation surfaced: the variable and Code Connect endpoints cannot access those page nodes in this session, and Code Connect is blocked by the current Figma seat/plan. I’ll use the accessible file metadata and targeted design-system search for the remaining token and component evidence, and mark collection/mode/alias fields as unavailable rather than guessing.

The targeted library search returns no published assets, consistent with the file having no subscribed libraries; the components are document-local. I have an inventory of the local component sets and state names, but not their Figma property schemas. I’m making one final variable lookup against the selected homepage frame to capture any tokens the variable endpoint does return, then I’ll report exact values separately from inferred or unavailable metadata.

SCC Graphic Design Club Design System Report
Scope: Inspected the Figma file’s desktop/mobile/tablet frames, primatives and components pages, available variable definitions, and document metadata. No code was generated and no files were modified.

1. Design System Overview
Intended homepage frame: desktop, 1440 × 2876 px.
Additional frames: tablet, 768 × 2250 px; mobile, 390 × 1000 px.
The file contains local primatives and components pages, but no subscribed external design libraries.
Figma exposes some token values and component layers, but not the variable collection/mode/alias metadata or complete component property schemas through the available endpoints.
2. Variable Collections and Modes
The available variable-definition response returns name/value pairs only. It does not return collection names, modes, alias targets, or variable IDs. Those fields are therefore unavailable; they cannot be reliably reconstructed from the response.

The types below are identified from the returned value format, not from an explicit type field. “Unavailable” means the endpoint did not report the information.

3. Colour Tokens
Exact variable name	Type and value	Collection / mode / alias	Usage reported or evident in design
Color/black/black 200	Color: #1f2c2c	Unavailable	Desktop background
Color/cyan/cyan 100	Color: #bae7e8	Unavailable	Year-label text token
Color/pink/pink 500	Color: #e45b97	Unavailable	Pink palette token
The primatives page shows swatch families named black, blue, cyan, magenta, and red, with tone labels 50, 100 through 900, plus an unnumbered base swatch. Exact values for those swatches were not returned. The palette naming is not fully consistent: variable definitions use pink, while the swatch page uses magenta.

Additional fills verified in the design reference but not returned as variables include #006289 for blue buttons, #e41770 for Featured labels, and #d1e7e8 for text. Other visible fills use alpha/transparency. These are design fills, not confirmed variable tokens.

4. Typography Tokens and Text Styles
Exact variable name	Type and value	Collection / mode / alias	Usage reported or evident in design
family/heading	String-like: Sarabun	Unavailable	Heading family
titles/h1/h1	String-like: Sarabun	Unavailable	H1 title family
titles/p/h1	String-like: Sarabun	Unavailable	Button/title text family
titles/h3/weight	Numeric-like: 600	Unavailable	H3 weight
font weight/regular	Numeric-like: 400	Unavailable	Regular text
font weight/semibold	Numeric-like: 600	Unavailable	Semibold text
font weight/bold	Numeric-like: 700	Unavailable	Bold text
font weight/extrabold	Numeric-like: 800	Unavailable	Extra-bold text
family/scale/size/h1	Numeric-like: 62	Unavailable	H1 size
family/scale/size/h2	54 pt in primitive scale label	Variable record unavailable	H2 scale label
family/scale/size/h3	Numeric-like: 46	Unavailable	H3 size
family/scale/size/h4	Numeric-like: 38	Unavailable	H4 size
family/scale/size/h5	Numeric-like: 30	Unavailable	H5 size
family/scale/size/h6	Numeric-like: 22	Unavailable	H6 size
family/scale/paragraph/p	Numeric-like: 14	Unavailable	Paragraph scale
family/scale/paragraph/sm	Numeric-like: 6	Unavailable	Small-text scale
The primitive-page scale label also names the h1–h6, p, and small hierarchy. The design context identifies the navigation club label as Inter Regular; no corresponding font variable was returned. No separate text-style inventory was available.

5. Spacing and Layout Tokens
Exact variable name	Type and value	Collection / mode / alias	Usage reported or evident in design
spacing/sm	Numeric-like: 8	Unavailable	Small spacing; used as component padding/gap
Other layout measurements are fixed frame/component dimensions rather than returned sizing variables. Examples include desktop navigation 1372 × 114 px, hero 836 × 628 px, past-years panel 350 × 795 px, Recent Work featured section 872 × 578 px, and News featured section 1255 × 832 px. No width/height token set was returned.

6. Effects and Visual Tokens
No effect variables or effect-style collection was returned. The design context exposes these literal treatments:

Hero artwork shadow: 15px 12px 3.65px rgba(0, 0, 0, 0.25).
Content preview shadow: 4px 4px 2px rgba(0, 0, 0, 0.25).
Past-years panel shadow: 4px 4px 4px rgba(0, 0, 0, 0.25).
Button inset shadows include 4px 4px 4.7px and 4px 4px 4px, both with black at 25% opacity.
Search field radius: 90px; card/button radii commonly use 10px.
No border token collection or reusable border styles were returned. The search field’s border is a literal 2 px pale-cyan border with transparency.

7. Component Inventory and Variants
The metadata exposes the following local component sets. Relationships listed here are the parent frame/set and its child variant symbols; deeper property schemas were not available.

Component/set	Variants or dimensions exposed	Relationships / notes
View More	Property 1=inactive, hover, active; each 198 × 69	Parent set 45:376; three child variants
View More	Property 1=inactive, hover, active; each 198 × 69	Second parent set 59:532; duplicate state set
folder	inactive, hover, active; each 305 × 215.13	Parent frame 31:199; three child symbols
header buttons	Property 1=Default, hover, active; each 346 × 39	Parent set 45:152; includes Events/Contact/About navigation
Search bar	Property 1=Default, hover, active; each 626 × 49	Parent set 45:186
view more	Property 1=Default, hover, active; each 189 × 49	Parent set 45:203; distinct from title-case View More
profile	Property 1=inactive, hover, active; each 42 × 51	Parent set 45:215
mic	Property 1=inactive, hover, active; each 35 × 64	Parent set 45:226
gdclogo home button	Property 1=Default, hover, active; each approx. 182 × 208	Parent set 45:238
2026	Property 1=Default, Variant2, Variant3; each 133 × 81	Parent frame 38:78; property meanings not provided
homebutton	147 × 147	Symbol 31:172; no variants exposed
featured section	872 × 578	Symbol 36:51; used for featured content
recent work	648 × 140	Symbol 36:45; section heading component
scc club type	265 × 23	Symbol 36:48; club-name label
featured	200 × 63	Symbol 36:31; Featured label
quote	850 × 213	Symbol 37:56; quote component
gdclogo home button/Variant4	100 × 114	Symbol 45:438; logo variant
header buttons/Variant4	128 × 26 and 316 × 39 instances are present	Responsive instances; no state/property schema exposed
The homepage metadata shows instances of these components in navigation, hero, archive, recent-work, news, and footer areas. The Code Connect component-context endpoint could not be used because the current Figma seat/plan does not have access; consequently, component property schemas and full nested relationships are not verified.

8. Naming Conventions and Taxonomy
Variable names use slash-separated paths, e.g. Color/black/black 200, family/scale/size/h1, and font weight/semibold.
Color names combine a family and tone number. The primitive page uses magenta, while a returned variable uses pink.
Component names mix title case and lowercase (View More / view more) and sometimes append variant suffixes (/Variant4).
State variants commonly use a Property 1= prefix followed by inactive, hover, active, or Default.
Primitive component sets and final page instances coexist in the same document.
9. Gaps and Inconsistencies
Collection names, mode names/values, variable aliases, and explicit variable types were not included in the available variable response.
The design-system search returned no assets, and no external libraries are subscribed.
Full color ramp hex values, border tokens, effect tokens, and reusable text-style definitions were not returned.
Code Connect access was denied by the current seat/plan, limiting property and relationship inspection.
The naming differs between pink and magenta, and between View More and view more.
The mobile frame’s year labels and some responsive placements differ from desktop. The tablet frame has a background that ends before its full frame height; these appear as design inconsistencies or unfinished states.
10. Implementation Recommendations
Treat only the listed hex values and numeric/font values as verified tokens; do not promote literal fills or inferred values into a formal token system without confirming them in Figma.
Preserve the slash-based token taxonomy, but resolve the pink/magenta and component casing differences before creating a shared code-token layer.
Use the existing component state names for interaction states where they are clear. Confirm the meaning of the three 2026 variants and any responsive Variant4 instances with the designer.
Treat collection, mode, alias, border/effect token, and component-property metadata as unresolved rather than inventing values.