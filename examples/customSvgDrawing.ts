import * as {React} from "react";
import { SvgDrawing, DrawingOption } from "svg";

interface UseCustomSvgDrawing {
  instance: SvgDrawing | null;
  clear: () => void;
  undo: () => void;
  changePenColor: (penColor: DrawingOption["penColor"]) => void;
  changePenWidth: (penwidth: DrawingOption["penWidth"]) => void;
  changeFill: (penColor: DrawingOption["fill"]) => void;
  changeClose: (penwidth: DrawingOption["close"]) => void;
  changeDelay: (penColor: DrawingOption["delay"]) => void;
  changeCurve: (penwidth: DrawingOption["curve"]) => void;
  getSvgXML: () => string | null;
  download: (ext: "svg" | "png" | "jpg") => void;
  getBase64: () => string | undefined;
  getLastPath: () => string | null | undefined;
  changeBackground: (content: string) => void;
}
export const useCustomSvgDrawing = (
  option?: Partial<DrawingOption>
): [MutableRefObject<HTMLDivElement | null>, UseCustomSvgDrawing] => {
  const renderRef = useRef<HTMLDivElement | null>(null);
  const drawingRef = useRef<SvgDrawing | null>(null);
  const getSvgXML = useCallback(() => {
    if (!drawingRef.current) return null;
    return drawingRef.current.toElement().outerHTML;
  }, []);
  const download = useCallback((ext: "svg" | "png" | "jpg" = "svg") => {
    if (!drawingRef.current) return;
    drawingRef.current.download(ext);
  }, []);
  const getBase64 = useCallback(() => {
    if (!drawingRef.current) return;
    return drawingRef.current.toBase64();
  }, []);
  const changePenColor = useCallback((param: DrawingOption["penColor"]) => {
    if (!drawingRef.current || !param) return;
    drawingRef.current.penColor = param;
  }, []);
  const changeFill = useCallback((param: DrawingOption["fill"]) => {
    if (!drawingRef.current || !param) return;
    drawingRef.current.fill = param;
  }, []);
  const changeDelay = useCallback((param: DrawingOption["delay"]) => {
    if (!drawingRef.current || !param) return;
    drawingRef.current.delay = param;
  }, []);
  const changePenWidth = useCallback((param: DrawingOption["penWidth"]) => {
    if (!drawingRef.current) return;
    drawingRef.current.penWidth = Number(param);
  }, []);
  const changeClose = useCallback((param: DrawingOption["close"]) => {
    if (!drawingRef.current || !param) return;
    drawingRef.current.close = param;
  }, []);
  const changeCurve = useCallback((param: DrawingOption["close"]) => {
    if (!drawingRef.current || !param) return;
    drawingRef.current.curve = param;
  }, []);
  const clear = useCallback(() => {
    if (!drawingRef.current) return;
    drawingRef.current.clear();
  }, []);
  const undo = useCallback(() => {
    if (!drawingRef.current) return;
    drawingRef.current.undo();
  }, []);
  const getLastPath = useCallback(() => {
    if (!drawingRef.current) return null;
    return drawingRef.current.toElement().lastElementChild?.getAttribute("d");
  }, []);
  const changeBackground = useCallback((content: string) => {
    if (!drawingRef.current) return null;
    //drawingRef.current.background =
    //`url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="gfg"><path stroke-width="3" d="M 271.5 169.21875 C 272.9 169.21875 273.9 168.81875 278.5 169.21875 C 283.1 169.61875 286.9 169.81875 294.5 171.21875 C 302.1 172.61875 302.5 172.01875 316.5 176.21875 C 330.5 180.41875 351.7 186.81875 364.5 192.21875 C 377.3 197.61875 374.9 198.61875 380.5 203.21875 C 386.1 207.81875 388.1 207.61875 392.5 215.21875 C 396.9 222.81875 400.3 233.01875 402.5 241.21875 C 404.7 249.41875 404.7 250.01875 403.5 256.21875 C 402.3 262.41875 400.1 267.41875 396.5 272.21875 C 392.9 277.01875 391.3 276.81875 385.5 280.21875 C 379.7 283.61875 379.1 286.21875 367.5 289.21875 C 355.9 292.21875 337.7 294.01875 327.5 295.21875 C 317.3 296.41875 321.3 295.81875 316.5 295.21875 C 311.7 294.61875 307.9 294.81875 303.5 292.21875 C 299.1 289.61875 298.9 290.81875 294.5 282.21875 C 290.1 273.61875 284.3 259.01875 281.5 249.21875 C 278.7 239.41875 278.9 243.81875 280.5 233.21875 C 282.1 222.61875 286.1 206.01875 289.5 196.21875 C 292.9 186.41875 294.1 188.01875 297.5 184.21875 C 300.9 180.41875 303.1 179.41875 306.5 177.21875 C 309.9 175.01875 312.9 174.01875 314.5 173.21875z"/></clipPath></defs><path id="path" transform="scale(3),translate(-200, -140)" d="M274.235 206.445c-.689-.083-4.168-10.991-4.052-10.435.96 4.63 1.616 10.007 1.542 10.163-.55 1.167-8.69-4.859-9.332-3.719 1.877.955 5.72 3.598 7.365 4.872-2.002.559-4.02.906-6.017 1.391-2.78.675-5.25 1.091-8.07 1.283-.07 1.118 7.887-.505 8.229.107.408.731-6.687 3.565-5.331 3.223 3.197-.805 7.326-2.276 10.492-2.932-1.403 1.557-4.012 6.407-4.518 7.833 2.165-1.289 5.16-7.456 7.943-7.763 3.133-.345 9.495 1.473 7.71 5.784-.802 1.943-2.128 3.972-3.278 5.714-1.583 2.398-3.14 4.769-5.164 6.849-1.556 1.599-2.782 2.074-4.968 1.969-2.806-.136-12.123-4.958-14.984-5.418 1.556 2.402 9.419 4.937 9.704 6.84-.927 1.342-14.6 3.487-14.526 4.215 5.65-.45 17.034-2.419 19.574-2.16 1.119.159 2.654.334 3.534 1.133 1.249 1.133.18 1.923-.537 3.032-.625.966-.92 1.75-2.107 2.074-1.206.326-10.072 1.268-11.313 1.258 1.24 1.553 9.789-.519 10.907.388-.9 1.262-24.054 15.047-24.912 16.354-.526.724 18.332-10.047 22.303-11.488-.16 2.356-.455 7.613-.363 9.102.36-.959.97-4.432 2.82-10.42.728-.703 1.653-2.007 2.263-2.83 2.827-3.813 5.439-7.721 8.067-11.681 1.82-2.746 3.612-5.536 5.668-8.115 2.448-3.151 5.086-4.172 7.356-4.79 2.14-.413 3.159-.345 5.196.03 2.779.396 2.04 2.99 3.049 5.218 1.44 3.183 6.583 2.31 9.566 2.062-.164-2.227.776-1.324-.337-4.185-.404-2.97.644-9.72 2.408-9.761 2.037-.714 3.562 2.745 5.535 3.349 2.017.621 3.129 2.984 4.954 4.424 2.819 2.668 3.311 6.28 3.21 9.642-.06 1.359.598 10.088 1.594 11.22.484-.638.295-9.394.811-9.977.69.538.403 1.917.99 2.412.272.23 4.439 10.979 4.801 10.99-.951-1.575-3.77-12.278-4.302-14.073-.366-1.243-1.69-4.771-1.89-6.06-.088-.574-.555-2.354-.382-2.866.713-2.11 2.781 1.79 3.11 2.52.68 1.507 3.599 7.827 4.985 9.09-.32-1.282-4.27-9.341-2.395-9.172 1.978.178 3.523 5.322 5.51 5.54.038-.21-2.297-2.737-2.212-3.47.098-.845 2.945 1.786 2.697-.13-1.504-.153-4.437-2.01-4.902-3.74-.438-1.633 3.051-2.98 4.217-3.687-.2-.336-.414-.763-.521-1.149.107.387-2.96 1.568-3.322 1.612-.995.123-2.106-.034-3.068-.319-2.085-.62-3.92-1.9-5.9-2.8-2.37-1.077-3.535-3.672-5.652-4.952-2.34-1.415-.8-1.354-3.768-3.984 1.799-1.197 10.949.742 13.03.9-.14-.268 1.278-1.18-.775-2.204-1.275-.635-8.254-.508-8.99-.837-.808-.36 4.109-4.476 8.043-4.751 1.735-.122-.66-.984-.831-1.425-.365-.94-10.537 3.918-11.381 4.363-4.647 2.452-9.348 5.018-14.508 6.21-3.087.713-5.588 1.921-8.901 1.648h-.021c-.002-.05-.008-.1-.011-.148-2.88.206-3.486.734-10.572-1.443-1.7-.212-4.194-1.817-5.07-1.93z" /><use fill="green"clip-path="url(#gfg)"href="#path" /></svg>)`;
  }, []);
  useEffect(() => {
    if (drawingRef.current) return;
    if (!renderRef.current) return;
    drawingRef.current = new SvgDrawing(renderRef.current, {
      ...option
    });
  });

  return [
    renderRef,
    {
      instance: drawingRef.current,
      changePenWidth,
      changePenColor,
      changeFill,
      changeDelay,
      changeClose,
      changeCurve,
      clear,
      undo,
      getSvgXML,
      download,
      getBase64,
      getLastPath,
      changeBackground
    }
  ];
};
