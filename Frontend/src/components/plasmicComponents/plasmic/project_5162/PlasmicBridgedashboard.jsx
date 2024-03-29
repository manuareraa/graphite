// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5GT6nVB5WgvLWb2iBXTk1E
// Component: PjaCRJxgT2C
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Tokeninput from "../../Tokeninput"; // plasmic-import: -AHNFgrq_W/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_project_5162.module.css"; // plasmic-import: 5GT6nVB5WgvLWb2iBXTk1E/projectcss
import sty from "./PlasmicBridgedashboard.module.css"; // plasmic-import: PjaCRJxgT2C/css

export const PlasmicBridgedashboard__VariantProps = new Array(
  "bridgetoken",
  "returntoken"
);

export const PlasmicBridgedashboard__ArgProps = new Array(
  "tokenreturnstack",
  "tokenunlockstack",
  "onChange"
);

function PlasmicBridgedashboard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbridgetoken]: hasVariant(
            variants,
            "bridgetoken",
            "bridgetoken"
          ),

          [sty.rootreturntoken]: hasVariant(
            variants,
            "returntoken",
            "returntoken"
          )
        }
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__wlcsZ,
          {
            [sty.textreturntoken__wlcsZzJ1Lk]: hasVariant(
              variants,
              "returntoken",
              "returntoken"
            )
          }
        )}
      >
        {hasVariant(variants, "returntoken", "returntoken")
          ? "Return your GPI Token"
          : "Bridge your GPI Token"}
      </div>

      {(hasVariant(variants, "returntoken", "returntoken") ? false : true) ? (
        <Tokeninput
          className={classNames("__wab_instance", sty.tokeninput__c2X2Q, {
            [sty.tokeninputbridgetoken__c2X2QMcBiZ]: hasVariant(
              variants,
              "bridgetoken",
              "bridgetoken"
            ),

            [sty.tokeninputreturntoken__c2X2QzJ1Lk]: hasVariant(
              variants,
              "returntoken",
              "returntoken"
            )
          })}
        />
      ) : null}
      {(hasVariant(variants, "bridgetoken", "bridgetoken") ? false : true) ? (
        <Tokeninput
          className={classNames("__wab_instance", sty.tokeninput__cM34, {
            [sty.tokeninputbridgetoken__cM34McBiZ]: hasVariant(
              variants,
              "bridgetoken",
              "bridgetoken"
            ),

            [sty.tokeninputreturntoken__cM34ZJ1Lk]: hasVariant(
              variants,
              "returntoken",
              "returntoken"
            )
          })}
        />
      ) : null}

      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(
          projectcss.all,
          projectcss.button,
          projectcss.__wab_text,
          sty.button,
          {
            [sty.buttonreturntoken]: hasVariant(
              variants,
              "returntoken",
              "returntoken"
            )
          }
        )}
      >
        {hasVariant(variants, "returntoken", "returntoken")
          ? "Return Tokens"
          : "Bridge Tokens"}
      </button>

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__ih4HX,
          {
            [sty.textreturntoken__ih4HXzJ1Lk]: hasVariant(
              variants,
              "returntoken",
              "returntoken"
            )
          }
        )}
      >
        {hasVariant(variants, "returntoken", "returntoken")
          ? "Token Returned Transactions"
          : "Token Locked Transactions"}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__qk92J)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gBK5
          )}
        >
          {"Main Deposit Hash"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___5ZcYk
          )}
        >
          {"Amount Bridged"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__bhVnW
          )}
        >
          {"Requester"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__zvv8K)}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.tokenreturnstack
        })}
      </p.Stack>

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__krOwd,
          {
            [sty.textbridgetoken__krOwdMcBiZ]: hasVariant(
              variants,
              "bridgetoken",
              "bridgetoken"
            ),

            [sty.textreturntoken__krOwdzJ1Lk]: hasVariant(
              variants,
              "returntoken",
              "returntoken"
            )
          }
        )}
      >
        {hasVariant(variants, "returntoken", "returntoken")
          ? "Tokens Unclocked"
          : hasVariant(variants, "bridgetoken", "bridgetoken")
          ? "Tokens Bridged"
          : "Tokens Bridged Transactions"}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ezQLn)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__eizsF
          )}
        >
          {"Main Deposit Hash"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__jUyLy
          )}
        >
          {"Amount Bridged"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__efDnf
          )}
        >
          {"Requester"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__pFe5J)}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.tokenunlockstack
        })}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBridgedashboard__ArgProps,
      internalVariantPropNames: PlasmicBridgedashboard__VariantProps
    });

    return PlasmicBridgedashboard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBridgedashboard";
  } else {
    func.displayName = `PlasmicBridgedashboard.${nodeName}`;
  }
  return func;
}

export const PlasmicBridgedashboard = Object.assign(
  // Top-level PlasmicBridgedashboard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicBridgedashboard
    internalVariantProps: PlasmicBridgedashboard__VariantProps,
    internalArgProps: PlasmicBridgedashboard__ArgProps
  }
);

export default PlasmicBridgedashboard;
/* prettier-ignore-end */
