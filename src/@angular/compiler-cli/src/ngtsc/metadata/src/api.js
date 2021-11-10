/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/metadata/src/api", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9tZXRhZGF0YS9zcmMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZU1ldGEgYXMgVDJEaXJlY3RpdmVNZXRhLCBTY2hlbWFNZXRhZGF0YX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICcuLi8uLi9pbXBvcnRzJztcbmltcG9ydCB7Q2xhc3NEZWNsYXJhdGlvbn0gZnJvbSAnLi4vLi4vcmVmbGVjdGlvbic7XG5cbmltcG9ydCB7Q2xhc3NQcm9wZXJ0eU1hcHBpbmcsIENsYXNzUHJvcGVydHlOYW1lfSBmcm9tICcuL3Byb3BlcnR5X21hcHBpbmcnO1xuXG5cbi8qKlxuICogTWV0YWRhdGEgY29sbGVjdGVkIGZvciBhbiBgTmdNb2R1bGVgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nTW9kdWxlTWV0YSB7XG4gIHJlZjogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+O1xuICBkZWNsYXJhdGlvbnM6IFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPltdO1xuICBpbXBvcnRzOiBSZWZlcmVuY2U8Q2xhc3NEZWNsYXJhdGlvbj5bXTtcbiAgZXhwb3J0czogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+W107XG4gIHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW107XG5cbiAgLyoqXG4gICAqIFRoZSByYXcgYHRzLkV4cHJlc3Npb25gIHdoaWNoIGdhdmUgcmlzZSB0byBgZGVjbGFyYXRpb25zYCwgaWYgb25lIGV4aXN0cy5cbiAgICpcbiAgICogSWYgdGhpcyBpcyBgbnVsbGAsIHRoZW4gZWl0aGVyIG5vIGRlY2xhcmF0aW9ucyBleGlzdCwgb3Igbm8gZXhwcmVzc2lvbiB3YXMgYXZhaWxhYmxlIChsaWtlbHlcbiAgICogYmVjYXVzZSB0aGUgbW9kdWxlIGNhbWUgZnJvbSBhIC5kLnRzIGZpbGUpLlxuICAgKi9cbiAgcmF3RGVjbGFyYXRpb25zOiB0cy5FeHByZXNzaW9ufG51bGw7XG59XG5cbi8qKlxuICogVHlwaW5nIG1ldGFkYXRhIGNvbGxlY3RlZCBmb3IgYSBkaXJlY3RpdmUgd2l0aGluIGFuIE5nTW9kdWxlJ3Mgc2NvcGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aXZlVHlwZUNoZWNrTWV0YSB7XG4gIC8qKlxuICAgKiBMaXN0IG9mIHN0YXRpYyBgbmdUZW1wbGF0ZUd1YXJkX3h4YCBtZW1iZXJzIGZvdW5kIG9uIHRoZSBEaXJlY3RpdmUncyBjbGFzcy5cbiAgICogQHNlZSBgVGVtcGxhdGVHdWFyZE1ldGFgXG4gICAqL1xuICBuZ1RlbXBsYXRlR3VhcmRzOiBUZW1wbGF0ZUd1YXJkTWV0YVtdO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBEaXJlY3RpdmUncyBjbGFzcyBoYXMgYSBzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZCBmdW5jdGlvbi5cbiAgICovXG4gIGhhc05nVGVtcGxhdGVDb250ZXh0R3VhcmQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgaW5wdXQgZmllbGRzIHdoaWNoIGhhdmUgYSBjb3JyZXNwb25kaW5nIHN0YXRpYyBgbmdBY2NlcHRJbnB1dFR5cGVfYCBvbiB0aGVcbiAgICogRGlyZWN0aXZlJ3MgY2xhc3MuIFRoaXMgYWxsb3dzIGlucHV0cyB0byBhY2NlcHQgYSB3aWRlciByYW5nZSBvZiB0eXBlcyBhbmQgY29lcmNlIHRoZSBpbnB1dCB0b1xuICAgKiBhIG5hcnJvd2VyIHR5cGUgd2l0aCBhIGdldHRlci9zZXR0ZXIuIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvdGVtcGxhdGUtdHlwZWNoZWNrLlxuICAgKi9cbiAgY29lcmNlZElucHV0RmllbGRzOiBTZXQ8Q2xhc3NQcm9wZXJ0eU5hbWU+O1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGlucHV0IGZpZWxkcyB3aGljaCBtYXAgdG8gYHJlYWRvbmx5YCwgYHByaXZhdGVgLCBvciBgcHJvdGVjdGVkYCBtZW1iZXJzIGluIHRoZVxuICAgKiBEaXJlY3RpdmUncyBjbGFzcy5cbiAgICovXG4gIHJlc3RyaWN0ZWRJbnB1dEZpZWxkczogU2V0PENsYXNzUHJvcGVydHlOYW1lPjtcblxuICAvKipcbiAgICogVGhlIHNldCBvZiBpbnB1dCBmaWVsZHMgd2hpY2ggYXJlIGRlY2xhcmVkIGFzIHN0cmluZyBsaXRlcmFsIG1lbWJlcnMgaW4gdGhlIERpcmVjdGl2ZSdzIGNsYXNzLlxuICAgKiBXZSBuZWVkIHRvIHRyYWNrIHRoZXNlIHNlcGFyYXRlbHkgYmVjYXVzZSB0aGVzZSBmaWVsZHMgbWF5IG5vdCBiZSB2YWxpZCBKUyBpZGVudGlmaWVycyBzb1xuICAgKiB3ZSBjYW5ub3QgdXNlIHRoZW0gd2l0aCBwcm9wZXJ0eSBhY2Nlc3MgZXhwcmVzc2lvbnMgd2hlbiBhc3NpZ25pbmcgaW5wdXRzLlxuICAgKi9cbiAgc3RyaW5nTGl0ZXJhbElucHV0RmllbGRzOiBTZXQ8Q2xhc3NQcm9wZXJ0eU5hbWU+O1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGlucHV0IGZpZWxkcyB3aGljaCBkbyBub3QgaGF2ZSBjb3JyZXNwb25kaW5nIG1lbWJlcnMgaW4gdGhlIERpcmVjdGl2ZSdzIGNsYXNzLlxuICAgKi9cbiAgdW5kZWNsYXJlZElucHV0RmllbGRzOiBTZXQ8Q2xhc3NQcm9wZXJ0eU5hbWU+O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBEaXJlY3RpdmUncyBjbGFzcyBpcyBnZW5lcmljLCBpLmUuIGBjbGFzcyBNeURpcjxUPiB7Li4ufWAuXG4gICAqL1xuICBpc0dlbmVyaWM6IGJvb2xlYW47XG59XG5cbi8qKlxuICogTWV0YWRhdGEgY29sbGVjdGVkIGZvciBhIGRpcmVjdGl2ZSB3aXRoaW4gYW4gTmdNb2R1bGUncyBzY29wZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RpdmVNZXRhIGV4dGVuZHMgVDJEaXJlY3RpdmVNZXRhLCBEaXJlY3RpdmVUeXBlQ2hlY2tNZXRhIHtcbiAgcmVmOiBSZWZlcmVuY2U8Q2xhc3NEZWNsYXJhdGlvbj47XG4gIC8qKlxuICAgKiBVbnBhcnNlZCBzZWxlY3RvciBvZiB0aGUgZGlyZWN0aXZlLCBvciBudWxsIGlmIHRoZSBkaXJlY3RpdmUgZG9lcyBub3QgaGF2ZSBhIHNlbGVjdG9yLlxuICAgKi9cbiAgc2VsZWN0b3I6IHN0cmluZ3xudWxsO1xuICBxdWVyaWVzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQSBtYXBwaW5nIG9mIGlucHV0IGZpZWxkIG5hbWVzIHRvIHRoZSBwcm9wZXJ0eSBuYW1lcy5cbiAgICovXG4gIGlucHV0czogQ2xhc3NQcm9wZXJ0eU1hcHBpbmc7XG5cbiAgLyoqXG4gICAqIEEgbWFwcGluZyBvZiBvdXRwdXQgZmllbGQgbmFtZXMgdG8gdGhlIHByb3BlcnR5IG5hbWVzLlxuICAgKi9cbiAgb3V0cHV0czogQ2xhc3NQcm9wZXJ0eU1hcHBpbmc7XG5cbiAgLyoqXG4gICAqIEEgYFJlZmVyZW5jZWAgdG8gdGhlIGJhc2UgY2xhc3MgZm9yIHRoZSBkaXJlY3RpdmUsIGlmIG9uZSB3YXMgZGV0ZWN0ZWQuXG4gICAqXG4gICAqIEEgdmFsdWUgb2YgYCdkeW5hbWljJ2AgaW5kaWNhdGVzIHRoYXQgd2hpbGUgdGhlIGFuYWx5emVyIGRldGVjdGVkIHRoYXQgdGhpcyBkaXJlY3RpdmUgZXh0ZW5kc1xuICAgKiBhbm90aGVyIHR5cGUsIGl0IGNvdWxkIG5vdCBzdGF0aWNhbGx5IGRldGVybWluZSB0aGUgYmFzZSBjbGFzcy5cbiAgICovXG4gIGJhc2VDbGFzczogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+fCdkeW5hbWljJ3xudWxsO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkaXJlY3RpdmUgaGFkIHNvbWUgaXNzdWUgd2l0aCBpdHMgZGVjbGFyYXRpb24gdGhhdCBtZWFucyBpdCBtaWdodCBub3QgaGF2ZSBjb21wbGV0ZVxuICAgKiBhbmQgcmVsaWFibGUgbWV0YWRhdGEuXG4gICAqL1xuICBpc1BvaXNvbmVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkaXJlY3RpdmUgaXMgbGlrZWx5IGEgc3RydWN0dXJhbCBkaXJlY3RpdmUgKGluamVjdHMgYFRlbXBsYXRlUmVmYCkuXG4gICAqL1xuICBpc1N0cnVjdHVyYWw6IGJvb2xlYW47XG59XG5cbi8qKlxuICogTWV0YWRhdGEgdGhhdCBkZXNjcmliZXMgYSB0ZW1wbGF0ZSBndWFyZCBmb3Igb25lIG9mIHRoZSBkaXJlY3RpdmUncyBpbnB1dHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVHdWFyZE1ldGEge1xuICAvKipcbiAgICogVGhlIGlucHV0IG5hbWUgdGhhdCB0aGlzIGd1YXJkIHNob3VsZCBiZSBhcHBsaWVkIHRvLlxuICAgKi9cbiAgaW5wdXROYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIHR5cGUgb2YgdGhlIHRlbXBsYXRlIGd1YXJkLlxuICAgKlxuICAgKiAtICdpbnZvY2F0aW9uJyBtZWFucyB0aGF0IGEgY2FsbCB0byB0aGUgdGVtcGxhdGUgZ3VhcmQgZnVuY3Rpb24gaXMgZW1pdHRlZCBzbyB0aGF0IGl0cyByZXR1cm5cbiAgICogICB0eXBlIGNhbiByZXN1bHQgaW4gbmFycm93aW5nIG9mIHRoZSBpbnB1dCB0eXBlLlxuICAgKiAtICdiaW5kaW5nJyBtZWFucyB0aGF0IHRoZSBpbnB1dCBiaW5kaW5nIGV4cHJlc3Npb24gaXRzZWxmIGlzIHVzZWQgYXMgdGVtcGxhdGUgZ3VhcmQuXG4gICAqL1xuICB0eXBlOiAnaW52b2NhdGlvbid8J2JpbmRpbmcnO1xufVxuXG4vKipcbiAqIE1ldGFkYXRhIGZvciBhIHBpcGUgd2l0aGluIGFuIE5nTW9kdWxlJ3Mgc2NvcGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGlwZU1ldGEge1xuICByZWY6IFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJlYWRzIG1ldGFkYXRhIGZvciBkaXJlY3RpdmVzLCBwaXBlcywgYW5kIG1vZHVsZXMgZnJvbSBhIHBhcnRpY3VsYXIgc291cmNlLCBzdWNoIGFzIC5kLnRzIGZpbGVzXG4gKiBvciBhIHJlZ2lzdHJ5LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhUmVhZGVyIHtcbiAgZ2V0RGlyZWN0aXZlTWV0YWRhdGEobm9kZTogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+KTogRGlyZWN0aXZlTWV0YXxudWxsO1xuICBnZXROZ01vZHVsZU1ldGFkYXRhKG5vZGU6IFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPik6IE5nTW9kdWxlTWV0YXxudWxsO1xuICBnZXRQaXBlTWV0YWRhdGEobm9kZTogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+KTogUGlwZU1ldGF8bnVsbDtcbn1cblxuLyoqXG4gKiBSZWdpc3RlcnMgbmV3IG1ldGFkYXRhIGZvciBkaXJlY3RpdmVzLCBwaXBlcywgYW5kIG1vZHVsZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFSZWdpc3RyeSB7XG4gIHJlZ2lzdGVyRGlyZWN0aXZlTWV0YWRhdGEobWV0YTogRGlyZWN0aXZlTWV0YSk6IHZvaWQ7XG4gIHJlZ2lzdGVyTmdNb2R1bGVNZXRhZGF0YShtZXRhOiBOZ01vZHVsZU1ldGEpOiB2b2lkO1xuICByZWdpc3RlclBpcGVNZXRhZGF0YShtZXRhOiBQaXBlTWV0YSk6IHZvaWQ7XG59XG4iXX0=