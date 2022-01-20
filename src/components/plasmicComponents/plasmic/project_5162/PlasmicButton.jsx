// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5GT6nVB5WgvLWb2iBXTk1E
// Component: Au9KGpvOoQJ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_project_5162.module.css"; // plasmic-import: 5GT6nVB5WgvLWb2iBXTk1E/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: Au9KGpvOoQJ/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 4oAEIGXQW5W/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: fZFeFQ1xXHI/icon

export const PlasmicButton__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color"
);

export const PlasmicButton__ArgProps = new Array(
  "children",
  "startIcon",
  "endIcon",
  "link"
);

function PlasmicButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.button,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.root__color_blue]: hasVariant(variants, "color", "blue"),
          [sty.root__color_clear]: hasVariant(variants, "color", "clear"),
          [sty.root__color_green]: hasVariant(variants, "color", "green"),
          [sty.root__color_link]: hasVariant(variants, "color", "link"),
          [sty.root__color_link_size_minimal]:
            hasVariant(variants, "color", "link") &&
            hasVariant(variants, "size", "minimal"),
          [sty.root__color_red]: hasVariant(variants, "color", "red"),
          [sty.root__color_sand]: hasVariant(variants, "color", "sand"),
          [sty.root__color_softBlue]: hasVariant(variants, "color", "softBlue"),
          [sty.root__color_softGreen]: hasVariant(
            variants,
            "color",
            "softGreen"
          ),

          [sty.root__color_softRed]: hasVariant(variants, "color", "softRed"),
          [sty.root__color_softSand]: hasVariant(variants, "color", "softSand"),
          [sty.root__color_softYellow]: hasVariant(
            variants,
            "color",
            "softYellow"
          ),

          [sty.root__color_white]: hasVariant(variants, "color", "white"),
          [sty.root__color_yellow]: hasVariant(variants, "color", "yellow"),
          [sty.root__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.root__shape_round]: hasVariant(variants, "shape", "round"),
          [sty.root__shape_round_size_compact]:
            hasVariant(variants, "shape", "round") &&
            hasVariant(variants, "size", "compact"),
          [sty.root__shape_rounded]: hasVariant(variants, "shape", "rounded"),
          [sty.root__shape_rounded_showStartIcon]:
            hasVariant(variants, "shape", "rounded") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.root__shape_sharp]: hasVariant(variants, "shape", "sharp"),
          [sty.root__showEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),

          [sty.root__showEndIcon_shape_rounded]:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.root__showStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),

          [sty.root__size_compact]: hasVariant(variants, "size", "compact"),
          [sty.root__size_compact_shape_rounded]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.root__size_compact_showEndIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.root__size_compact_showStartIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.root__size_compact_showStartIcon_showEndIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.root__size_minimal]: hasVariant(variants, "size", "minimal")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(
        hasVariant(variants, "showStartIcon", "showStartIcon") ? true : false
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainer__color_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),

            [sty.startIconContainer__shape_rounded_showStartIcon]:
              hasVariant(variants, "shape", "rounded") &&
              hasVariant(variants, "showStartIcon", "showStartIcon"),
            [sty.startIconContainer__showStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__jxfpQ)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIcon__color_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),

              [sty.slotTargetStartIcon__color_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),

              [sty.slotTargetStartIcon__color_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetStartIcon__color_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),

              [sty.slotTargetStartIcon__color_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),

              [sty.slotTargetStartIcon__color_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),

              [sty.slotTargetStartIcon__color_softSand]: hasVariant(
                variants,
                "color",
                "softSand"
              ),

              [sty.slotTargetStartIcon__color_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),

              [sty.slotTargetStartIcon__color_white]: hasVariant(
                variants,
                "color",
                "white"
              ),

              [sty.slotTargetStartIcon__color_yellow]: hasVariant(
                variants,
                "color",
                "yellow"
              ),

              [sty.slotTargetStartIcon__showStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer_____focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.contentContainer__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.contentContainer__shape_rounded]: hasVariant(
            variants,
            "shape",
            "rounded"
          ),

          [sty.contentContainer__showEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.slotTargetChildren__color_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),

            [sty.slotTargetChildren__color_clear]: hasVariant(
              variants,
              "color",
              "clear"
            ),

            [sty.slotTargetChildren__color_green]: hasVariant(
              variants,
              "color",
              "green"
            ),

            [sty.slotTargetChildren__color_link]: hasVariant(
              variants,
              "color",
              "link"
            ),

            [sty.slotTargetChildren__color_link_size_minimal]:
              hasVariant(variants, "color", "link") &&
              hasVariant(variants, "size", "minimal"),
            [sty.slotTargetChildren__color_red]: hasVariant(
              variants,
              "color",
              "red"
            ),

            [sty.slotTargetChildren__color_sand]: hasVariant(
              variants,
              "color",
              "sand"
            ),

            [sty.slotTargetChildren__color_softBlue]: hasVariant(
              variants,
              "color",
              "softBlue"
            ),

            [sty.slotTargetChildren__color_softGreen]: hasVariant(
              variants,
              "color",
              "softGreen"
            ),

            [sty.slotTargetChildren__color_softRed]: hasVariant(
              variants,
              "color",
              "softRed"
            ),

            [sty.slotTargetChildren__color_softSand]: hasVariant(
              variants,
              "color",
              "softSand"
            ),

            [sty.slotTargetChildren__color_softYellow]: hasVariant(
              variants,
              "color",
              "softYellow"
            ),

            [sty.slotTargetChildren__color_white]: hasVariant(
              variants,
              "color",
              "white"
            ),

            [sty.slotTargetChildren__color_yellow]: hasVariant(
              variants,
              "color",
              "yellow"
            ),

            [sty.slotTargetChildren__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.slotTargetChildren__shape_rounded]: hasVariant(
              variants,
              "shape",
              "rounded"
            ),

            [sty.slotTargetChildren__showEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),

            [sty.slotTargetChildren__showStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),

            [sty.slotTargetChildren__size_minimal]: hasVariant(
              variants,
              "size",
              "minimal"
            )
          })
        })}
      </div>

      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainer__color_white]: hasVariant(
              variants,
              "color",
              "white"
            ),

            [sty.endIconContainer__color_yellow]: hasVariant(
              variants,
              "color",
              "yellow"
            ),

            [sty.endIconContainer__showEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon2Icon
                className={classNames(projectcss.all, sty.svg__gZq)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIcon__color_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),

              [sty.slotTargetEndIcon__color_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetEndIcon__color_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),

              [sty.slotTargetEndIcon__color_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),

              [sty.slotTargetEndIcon__color_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),

              [sty.slotTargetEndIcon__color_softSand]: hasVariant(
                variants,
                "color",
                "softSand"
              ),

              [sty.slotTargetEndIcon__color_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),

              [sty.slotTargetEndIcon__color_white]: hasVariant(
                variants,
                "color",
                "white"
              ),

              [sty.slotTargetEndIcon__color_yellow]: hasVariant(
                variants,
                "color",
                "yellow"
              ),

              [sty.slotTargetEndIcon__showEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </p.Stack>
  );
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },

      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },

    ref
  );

  return b;
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,
    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
