// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5GT6nVB5WgvLWb2iBXTk1E
// Component: 6aKy4XMcUD
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: mnEoyzyDnh9/component
import Walletstatus from "../../Walletstatus"; // plasmic-import: yl_7FX-no3/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_project_5162.module.css"; // plasmic-import: 5GT6nVB5WgvLWb2iBXTk1E/projectcss
import sty from "./PlasmicVerifyId.module.css"; // plasmic-import: 6aKy4XMcUD/css
import OksvgIcon from "./icons/PlasmicIcon__Oksvg"; // plasmic-import: xU3Kendof/icon

export const PlasmicVerifyId__VariantProps = new Array("displayId", "notfound");

export const PlasmicVerifyId__ArgProps = new Array("idimage");

function PlasmicVerifyId__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootdisplayId]: hasVariant(variants, "displayId", "displayId") }
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__m0Lqc,
          {
            [sty.textdisplayId__m0LqcXa4I6]: hasVariant(
              variants,
              "displayId",
              "displayId"
            )
          }
        )}
      >
        {"VERIFY ID CARD"}
      </div>

      <div
        data-plasmic-name={"applicationForm"}
        data-plasmic-override={overrides.applicationForm}
        className={classNames(projectcss.all, sty.applicationForm, {
          [sty.applicationFormdisplayId]: hasVariant(
            variants,
            "displayId",
            "displayId"
          ),

          [sty.applicationFormnotfound]: hasVariant(
            variants,
            "notfound",
            "notfound"
          )
        })}
      >
        {(
          hasVariant(variants, "notfound", "notfound")
            ? true
            : hasVariant(variants, "displayId", "displayId")
            ? true
            : false
        ) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__xkTbv, {
              [sty.freeBoxdisplayId__xkTbvXa4I6]: hasVariant(
                variants,
                "displayId",
                "displayId"
              ),

              [sty.freeBoxnotfound__xkTbvvnAI]: hasVariant(
                variants,
                "notfound",
                "notfound"
              )
            })}
          >
            {(
              hasVariant(variants, "notfound", "notfound")
                ? false
                : hasVariant(variants, "displayId", "displayId")
                ? false
                : false
            ) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___23Pex, {
                  [sty.freeBoxdisplayId___23Pexxa4I6]: hasVariant(
                    variants,
                    "displayId",
                    "displayId"
                  ),

                  [sty.freeBoxnotfound___23PeXvnAI]: hasVariant(
                    variants,
                    "notfound",
                    "notfound"
                  )
                })}
              >
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__vYMh)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rsacx
                      )}
                    >
                      {"Enter Token Verification No."}
                    </div>
                  </div>
                ) : null}

                <TextInput
                  data-plasmic-name={"tokenno"}
                  data-plasmic-override={overrides.tokenno}
                  className={classNames("__wab_instance", sty.tokenno, {
                    [sty.tokennonotfound]: hasVariant(
                      variants,
                      "notfound",
                      "notfound"
                    )
                  })}
                  placeholder={"Token ID (Ex. JB118UI)"}
                />

                <button
                  data-plasmic-name={"verifyidbutton"}
                  data-plasmic-override={overrides.verifyidbutton}
                  className={classNames(
                    projectcss.all,
                    projectcss.button,
                    projectcss.__wab_text,
                    sty.verifyidbutton
                  )}
                >
                  {"Submit"}
                </button>
              </p.Stack>
            ) : null}
          </p.Stack>
        ) : null}
        {(hasVariant(variants, "notfound", "notfound") ? true : true) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___4TZsj,
              {
                [sty.textnotfound___4TZsJvnAI]: hasVariant(
                  variants,
                  "notfound",
                  "notfound"
                )
              }
            )}
          >
            {"No Matching Record Found"}
          </div>
        ) : null}
        {(
          hasVariant(variants, "notfound", "notfound")
            ? false
            : hasVariant(variants, "displayId", "displayId")
            ? false
            : true
        ) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nG4S9,
              {
                [sty.textdisplayId__nG4S9Xa4I6]: hasVariant(
                  variants,
                  "displayId",
                  "displayId"
                ),

                [sty.textnotfound__nG4S9VnAI]: hasVariant(
                  variants,
                  "notfound",
                  "notfound"
                )
              }
            )}
          >
            {"Loading..."}
          </div>
        ) : null}
        {false ? (
          <div className={classNames(projectcss.all, sty.freeBox__tyPfi)}>
            {true ? (
              <Walletstatus
                data-plasmic-name={"walletmount"}
                data-plasmic-override={overrides.walletmount}
                className={classNames("__wab_instance", sty.walletmount)}
              />
            ) : null}

            <div
              data-plasmic-name={"frame3"}
              data-plasmic-override={overrides.frame3}
              className={classNames(projectcss.all, sty.frame3)}
            >
              <div
                data-plasmic-name={"graphiteLogo2"}
                data-plasmic-override={overrides.graphiteLogo2}
                className={classNames(projectcss.all, sty.graphiteLogo2)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jySyg
                )}
              >
                {"POWERED BY"}
              </div>
            </div>
          </div>
        ) : null}
        {(hasVariant(variants, "displayId", "displayId") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wZsOo, {
              [sty.freeBoxdisplayId__wZsOoxa4I6]: hasVariant(
                variants,
                "displayId",
                "displayId"
              ),

              [sty.freeBoxnotfound__wZsOOvnAI]: hasVariant(
                variants,
                "notfound",
                "notfound"
              )
            })}
          >
            {(
              hasVariant(variants, "notfound", "notfound")
                ? true
                : hasVariant(variants, "displayId", "displayId")
                ? true
                : false
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__x042J,
                  {
                    [sty.textdisplayId__x042Jxa4I6]: hasVariant(
                      variants,
                      "displayId",
                      "displayId"
                    ),

                    [sty.textnotfound__x042JvnAI]: hasVariant(
                      variants,
                      "notfound",
                      "notfound"
                    )
                  }
                )}
              >
                {hasVariant(variants, "displayId", "displayId")
                  ? "VERIFIED"
                  : "No Matching Record Found"}
              </div>
            ) : null}
            {(hasVariant(variants, "displayId", "displayId") ? true : true) ? (
              <OksvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg, {
                  [sty.svgdisplayId]: hasVariant(
                    variants,
                    "displayId",
                    "displayId"
                  )
                })}
                role={"img"}
              />
            ) : null}
          </p.Stack>
        ) : null}
        {(hasVariant(variants, "displayId", "displayId") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__hxgR9, {
              [sty.freeBoxdisplayId__hxgR9Xa4I6]: hasVariant(
                variants,
                "displayId",
                "displayId"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: null,
              value: args.idimage
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "applicationForm",
    "tokenno",
    "verifyidbutton",
    "walletmount",
    "frame3",
    "graphiteLogo2",
    "svg"
  ],

  applicationForm: [
    "applicationForm",
    "tokenno",
    "verifyidbutton",
    "walletmount",
    "frame3",
    "graphiteLogo2",
    "svg"
  ],

  tokenno: ["tokenno"],
  verifyidbutton: ["verifyidbutton"],
  walletmount: ["walletmount"],
  frame3: ["frame3", "graphiteLogo2"],
  graphiteLogo2: ["graphiteLogo2"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicVerifyId__ArgProps,
      internalVariantPropNames: PlasmicVerifyId__VariantProps
    });

    return PlasmicVerifyId__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVerifyId";
  } else {
    func.displayName = `PlasmicVerifyId.${nodeName}`;
  }
  return func;
}

export const PlasmicVerifyId = Object.assign(
  // Top-level PlasmicVerifyId renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    applicationForm: makeNodeComponent("applicationForm"),
    tokenno: makeNodeComponent("tokenno"),
    verifyidbutton: makeNodeComponent("verifyidbutton"),
    walletmount: makeNodeComponent("walletmount"),
    frame3: makeNodeComponent("frame3"),
    graphiteLogo2: makeNodeComponent("graphiteLogo2"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicVerifyId
    internalVariantProps: PlasmicVerifyId__VariantProps,
    internalArgProps: PlasmicVerifyId__ArgProps
  }
);

export default PlasmicVerifyId;
/* prettier-ignore-end */