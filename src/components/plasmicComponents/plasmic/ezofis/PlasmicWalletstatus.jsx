// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5GT6nVB5WgvLWb2iBXTk1E
// Component: yl_7FX-no3
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_ezofis.module.css"; // plasmic-import: 5GT6nVB5WgvLWb2iBXTk1E/projectcss
import sty from "./PlasmicWalletstatus.module.css"; // plasmic-import: yl_7FX-no3/css

export const PlasmicWalletstatus__VariantProps = new Array(
  "disconnected",
  "connected"
);

export const PlasmicWalletstatus__ArgProps = new Array("address");

function PlasmicWalletstatus__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return true ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__connected]: hasVariant(variants, "connected", "connected"),
        [sty.root__disconnected]: hasVariant(
          variants,
          "disconnected",
          "disconnected"
        )
      })}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__xIxCk, {
          [sty.freeBox__connected__xIxCk5NcG6]: hasVariant(
            variants,
            "connected",
            "connected"
          ),

          [sty.freeBox__disconnected__xIxCkWtgQv]: hasVariant(
            variants,
            "disconnected",
            "disconnected"
          )
        })}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.text__connected]: hasVariant(
                variants,
                "connected",
                "connected"
              ),

              [sty.text__disconnected]: hasVariant(
                variants,
                "disconnected",
                "disconnected"
              )
            }
          )}
        >
          {"WALLET"}
        </div>

        {true ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__eQ1Zx, {
              [sty.freeBox__connected__eQ1Zx5NcG6]: hasVariant(
                variants,
                "connected",
                "connected"
              ),

              [sty.freeBox__disconnected__eQ1ZxWtgQv]: hasVariant(
                variants,
                "disconnected",
                "disconnected"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "---",
              value: args.address,
              className: classNames(sty.slotTargetAddress, {
                [sty.slotTargetAddress__connected]: hasVariant(
                  variants,
                  "connected",
                  "connected"
                ),

                [sty.slotTargetAddress__disconnected]: hasVariant(
                  variants,
                  "disconnected",
                  "disconnected"
                )
              })
            })}
          </div>
        ) : null}
      </div>
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicWalletstatus__ArgProps,
      internalVariantPropNames: PlasmicWalletstatus__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicWalletstatus__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWalletstatus";
  } else {
    func.displayName = `PlasmicWalletstatus.${nodeName}`;
  }
  return func;
}

export const PlasmicWalletstatus = Object.assign(
  // Top-level PlasmicWalletstatus renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicWalletstatus
    internalVariantProps: PlasmicWalletstatus__VariantProps,
    internalArgProps: PlasmicWalletstatus__ArgProps
  }
);

export default PlasmicWalletstatus;
/* prettier-ignore-end */
