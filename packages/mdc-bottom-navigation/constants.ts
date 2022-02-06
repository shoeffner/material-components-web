/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

const cssClasses = {
  ICON: 'mdc-bottom-navigation__icon',
  LABEL: 'mdc-bottom-navigation__label',
  LABEL_INLINE: 'mdc-bottom-navigation__label--inline',
  MENU: 'mdc-bottom-navigation__menu',
  MENU_ACTIVE: 'mdc-bottom-navigation__menu--active',
  ROOT: 'mdc-bottom-navigation',
};

const strings = {
  ICON_SELECTOR: `.${cssClasses.ICON}`,
  LABEL_INLINE_SELECTOR: `.${cssClasses.LABEL_INLINE}`,
  LABEL_SELECTOR: `.${cssClasses.LABEL}`,
  MENU_ACTIVE_SELECTOR: `.${cssClasses.MENU_ACTIVE}`,
  MENU_SELECTOR: `.${cssClasses.MENU}`,
  ROOT_SELECTOR: `.${cssClasses.ROOT}`,
};

export {cssClasses, strings};
