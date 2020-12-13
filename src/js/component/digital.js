import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Digital(props) {
	return (
		<div class="digital-watch">
			<svg width="0" height="0" viewBox="0 0 0 0">
				<defs>
					<g id="unit-h">
						<path d="M0 20 L20 40 L180 40 L200 20 L180 0 L20 0 Z" />
					</g>
					<g id="unit-v">
						<path d="M20 0 L0 20 L0 180 L20 200 L40 180 L40 20 Z" />
					</g>
				</defs>
			</svg>
			<div class="second">
				<svg
					id="second-1"
					class="num-0"
					width="130"
					height="240"
					viewBox="0 0 260 480">
					<use xlink:href="#unit-h" class="segment a" x="30" y="0" />
					<use
						xlink:href="#unit-v"
						class="segment b"
						x="220"
						y="30"
					/>
					<use
						xlink:href="#unit-v"
						class="segment c"
						x="220"
						y="250"
					/>
					<use
						xlink:href="#unit-h"
						class="segment d"
						x="30"
						y="440"
					/>
					<use xlink:href="#unit-v" class="segment e" x="0" y="250" />
					<use xlink:href="#unit-v" class="segment f" x="0" y="30" />
					<use
						xlink:href="#unit-h"
						class="segment g"
						x="30"
						y="220"
					/>
				</svg>
				<svg
					id="second-2"
					class="num-0"
					width="130"
					height="240"
					viewBox="0 0 260 480">
					<use xlink:href="#unit-h" class="segment a" x="30" y="0" />
					<use
						xlink:href="#unit-v"
						class="segment b"
						x="220"
						y="30"
					/>
					<use
						xlink:href="#unit-v"
						class="segment c"
						x="220"
						y="250"
					/>
					<use
						xlink:href="#unit-h"
						class="segment d"
						x="30"
						y="440"
					/>
					<use xlink:href="#unit-v" class="segment e" x="0" y="250" />
					<use xlink:href="#unit-v" class="segment f" x="0" y="30" />
					<use
						xlink:href="#unit-h"
						class="segment g"
						x="30"
						y="220"
					/>
				</svg>
				<svg
					id="second-3"
					class="num-0"
					width="130"
					height="240"
					viewBox="0 0 260 480">
					<use xlink:href="#unit-h" class="segment a" x="30" y="0" />
					<use
						xlink:href="#unit-v"
						class="segment b"
						x="220"
						y="30"
					/>
					<use
						xlink:href="#unit-v"
						class="segment c"
						x="220"
						y="250"
					/>
					<use
						xlink:href="#unit-h"
						class="segment d"
						x="30"
						y="440"
					/>
					<use xlink:href="#unit-v" class="segment e" x="0" y="250" />
					<use xlink:href="#unit-v" class="segment f" x="0" y="30" />
					<use
						xlink:href="#unit-h"
						class="segment g"
						x="30"
						y="220"
					/>
				</svg>
				<svg
					id="second-4"
					class="num-0"
					width="130"
					height="240"
					viewBox="0 0 260 480">
					<use xlink:href="#unit-h" class="segment a" x="30" y="0" />
					<use
						xlink:href="#unit-v"
						class="segment b"
						x="220"
						y="30"
					/>
					<use
						xlink:href="#unit-v"
						class="segment c"
						x="220"
						y="250"
					/>
					<use
						xlink:href="#unit-h"
						class="segment d"
						x="30"
						y="440"
					/>
					<use xlink:href="#unit-v" class="segment e" x="0" y="250" />
					<use xlink:href="#unit-v" class="segment f" x="0" y="30" />
					<use
						xlink:href="#unit-h"
						class="segment g"
						x="30"
						y="220"
					/>
				</svg>
				<svg
					id="second-5"
					class="num-0"
					width="130"
					height="240"
					viewBox="0 0 260 480">
					<use xlink:href="#unit-h" class="segment a" x="30" y="0" />
					<use
						xlink:href="#unit-v"
						class="segment b"
						x="220"
						y="30"
					/>
					<use
						xlink:href="#unit-v"
						class="segment c"
						x="220"
						y="250"
					/>
					<use
						xlink:href="#unit-h"
						class="segment d"
						x="30"
						y="440"
					/>
					<use xlink:href="#unit-v" class="segment e" x="0" y="250" />
					<use xlink:href="#unit-v" class="segment f" x="0" y="30" />
					<use
						xlink:href="#unit-h"
						class="segment g"
						x="30"
						y="220"
					/>
				</svg>
				<svg
					id="second-6"
					class="num-0"
					width="130"
					height="240"
					viewBox="0 0 260 480">
					<use xlink:href="#unit-h" class="segment a" x="30" y="0" />
					<use
						xlink:href="#unit-v"
						class="segment b"
						x="220"
						y="30"
					/>
					<use
						xlink:href="#unit-v"
						class="segment c"
						x="220"
						y="250"
					/>
					<use
						xlink:href="#unit-h"
						class="segment d"
						x="30"
						y="440"
					/>
					<use xlink:href="#unit-v" class="segment e" x="0" y="250" />
					<use xlink:href="#unit-v" class="segment f" x="0" y="30" />
					<use
						xlink:href="#unit-h"
						class="segment g"
						x="30"
						y="220"
					/>
				</svg>
			</div>
		</div>
	);
}

Home.propTypes = {
	n1: PropTypes.string,
	n2: PropTypes.string,
	n3: PropTypes.string,
	n4: PropTypes.string,
	n5: PropTypes.string,
	n6: PropTypes.string
};
