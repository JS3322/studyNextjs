// /* TODO: Abstract this module away into a separate npm package */
//
// /*
//  * References:
//  * - https://developers.google.com/fonts/docs/css2
//  * - https://github.com/google/fonts/tree/master/axisregistry
//  */
//
// import Head from "next/head";
//
// /* eslint-disable @typescript-eslint/ban-types */
//
// type Italic = 0 | 1 | (number & {});
//
// type OpticalSize =
//     | 6
//     | 7
//     | 8
//     | 9
//     | 10
//     | 11
//     | 12
//     | 14
//     | 18
//     | 20
//     | 24
//     | 28
//     | 36
//     | 48
//     | 60
//     | 72
//     | 96
//     | 120
//     | 144
//     | (number & {});
//
// type Slant = 0 | (number & {});
//
// type Width =
//     | 50
//     | 62.5
//     | 75
//     | 87.5
//     | 100
//     | 112.5
//     | 125
//     | 150
//     | 200
//     | (number & {});
//
// type Weight =
//     | 100
//     | 200
//     | 300
//     | 400
//     | 500
//     | 600
//     | 700
//     | 800
//     | 900
//     | (number & {});
//
// /* eslint-enable @typescript-eslint/ban-types */
//
// type Range<T extends number> = { start: T; end: T };
// type AxisValue<T extends number> = T | Range<T>;
//
// type FontStyle = {
//     ital?: AxisValue<Italic>;
//     opsz?: AxisValue<OpticalSize>;
//     slnt?: AxisValue<Slant>;
//     wdth?: AxisValue<Width>;
//     wght?: AxisValue<Weight>;
//     // TODO: Consider adding `[axis: string]: Axis<number> | undefined;`
// };
//
// type FontDisplay = "auto" | "block" | "swap" | "fallback" | "optional";
//
// function sortableAxisValue(value: AxisValue<number>) {
//     return typeof value === "number" ? value : value.start + Number.EPSILON;
// }
//
// const defaultValuesByAxis = new Map<keyof FontStyle, number>([
//     ["ital", 0],
//     ["opsz", 14],
//     ["slnt", 0],
//     ["wdth", 100],
//     ["wght", 400],
// ]);
//
// export type GoogleFontsSheetProps = {
//     fonts: { [family: string]: FontStyle[] };
//     text?: string;
//     display?: FontDisplay;
// };
//
// export function GoogleFontsSheet({
//                                      fonts,
//                                      text,
//                                      display = "swap",
//                                  }: GoogleFontsSheetProps): React.ReactElement | null {
//     const familiesSorted = Object.keys(fonts).sort();
//     const normalizedStylesByFamilySorted = familiesSorted.map((family) => {
//         const axesInUse = new Set<keyof FontStyle>();
//         const styles = fonts[family];
//         styles.forEach((style) => {
//             Object.entries(style).forEach(([axis, value]) => {
//                 if (value != null) {
//                     axesInUse.add(axis as keyof FontStyle);
//                 }
//             });
//         });
//
//         const axesInUseSorted = [...axesInUse].sort();
//         return [
//             family,
//             styles
//                 .map(
//                     (style) =>
//                         new Map(
//                             axesInUseSorted.map((axis) => [
//                                 axis,
//                                 style[axis] ?? defaultValuesByAxis.get(axis),
//                             ]),
//                         ),
//                 )
//                 .sort((a, b) => {
//                     const firstDifferentValuedAxis = axesInUseSorted.find(
//                         (axis) => a.get(axis) !== b.get(axis),
//                     );
//                     if (!firstDifferentValuedAxis) return 0;
//                     return (
//                         /* eslint-disable @typescript-eslint/no-non-null-assertion */
//                         sortableAxisValue(a.get(firstDifferentValuedAxis)!) -
//                         sortableAxisValue(b.get(firstDifferentValuedAxis)!)
//                         /* eslint-enable @typescript-eslint/no-non-null-assertion */
//                     );
//                 }),
//         ] as const;
//     });
//
//     return normalizedStylesByFamilySorted.length > 0 ? (
//         <Head>
//             {/* eslint-disable-next-line @next/next/missing-preload */}
//             <link
//                 href={
//                     // eslint-disable-next-line prefer-template
//                     "https://fonts.googleapis.com/css2?" +
//                     normalizedStylesByFamilySorted
//                         .map(([family, styles]) => {
//                             let param = `family=${family.replace(/ /g, "+")}`;
//                             if (styles.length > 0) {
//                                 param += `:${[...styles[0].keys()]}@${styles
//                                     .map((style) => [...style.values()])
//                                     .join(";")}`;
//                             }
//                             return param;
//                         })
//                         .join("&") +
//                     (text ? `&text=${encodeURIComponent(text)}` : "") +
//                     (display !== "auto" ? `&display=${display}` : "")
//                 }
//                 rel="stylesheet"
//             />
//         </Head>
//     ) : null;
// }