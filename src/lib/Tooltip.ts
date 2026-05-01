export class Tooltip {
  static activeTooltip: Tooltip | null = null;

  trigger: HTMLElement;
  contentTemplate: HTMLTemplateElement | null;
  tooltipElement: HTMLElement | null = null;
  options: { direction: string; delay: number; maxWidth: string };
  hideTimeout: ReturnType<typeof setTimeout> | null = null;
  isVisible: boolean = false;

  constructor(trigger: HTMLElement) {
    this.trigger = trigger;
    this.contentTemplate = trigger.querySelector("[data-tooltip-content]");
    this.options = {
      direction: trigger.dataset.direction || "top",
      maxWidth: trigger.dataset.maxWidth || "20rem",
      delay: 200,
    };

    this.init();
  }

  init() {
    this.trigger.addEventListener("mouseenter", () => this.scheduleShow());
    this.trigger.addEventListener("mouseleave", () => this.scheduleHide());
    this.trigger.addEventListener("focus", () => this.scheduleShow());
    this.trigger.addEventListener("blur", () => this.scheduleHide());
  }

  createTooltip() {
    if (this.tooltipElement) return;
    if (!this.contentTemplate) return;

    const content = this.contentTemplate.content.firstElementChild?.cloneNode(
      true
    ) as HTMLElement;
    if (!content) return;

    this.tooltipElement = content;

    // Styles
    this.tooltipElement.style.position = "fixed";
    this.tooltipElement.style.top = "0";
    this.tooltipElement.style.left = "0";
    this.tooltipElement.style.zIndex = "9999";
    this.tooltipElement.style.opacity = "0";
    this.tooltipElement.style.pointerEvents = "none";
    // Simple fade animation only
    this.tooltipElement.style.transition = "opacity 0.2s ease";

    // Responsive Width Logic
    this.tooltipElement.style.width = "max-content";
    // Use the smaller of the configured max-width or 90% of viewport width
    this.tooltipElement.style.maxWidth = `min(${this.options.maxWidth}, 90vw)`;
    this.tooltipElement.style.whiteSpace = "normal";
    this.tooltipElement.style.wordBreak = "break-word";

    this.tooltipElement.classList.add("tooltip-message");

    document.body.appendChild(this.tooltipElement);

    this.tooltipElement.addEventListener("mouseenter", () => this.cancelHide());
    this.tooltipElement.addEventListener("mouseleave", () =>
      this.scheduleHide()
    );
  }

  scheduleShow() {
    this.cancelHide();
    if (!this.isVisible) {
      this.show();
    }
  }

  scheduleHide() {
    if (this.hideTimeout) return;
    this.hideTimeout = setTimeout(() => {
      this.hide();
    }, this.options.delay);
  }

  cancelHide() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  show() {
    // Singleton pattern: Close any other active tooltip
    if (Tooltip.activeTooltip && Tooltip.activeTooltip !== this) {
      Tooltip.activeTooltip.hide();
    }
    Tooltip.activeTooltip = this;

    this.createTooltip();
    if (!this.tooltipElement) return;

    this.isVisible = true;
    this.tooltipElement.style.display = "block";
    this.updatePosition();

    requestAnimationFrame(() => {
      if (!this.tooltipElement) return;
      this.tooltipElement.style.opacity = "1";
      this.tooltipElement.style.pointerEvents = "auto";
    });

    window.addEventListener("scroll", this.handleUpdate, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", this.handleUpdate, { passive: true });
  }

  hide() {
    if (Tooltip.activeTooltip === this) {
      Tooltip.activeTooltip = null;
    }

    if (!this.tooltipElement) return;

    this.isVisible = false;
    this.tooltipElement.style.opacity = "0";
    this.tooltipElement.style.pointerEvents = "none";

    window.removeEventListener("scroll", this.handleUpdate, true);
    window.removeEventListener("resize", this.handleUpdate);
  }

  handleUpdate = () => {
    if (this.isVisible) {
      this.updatePosition();
    }
  };

  updatePosition() {
    if (!this.tooltipElement || !this.isVisible) return;

    const triggerRect = this.trigger.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.getBoundingClientRect();
    const viewport = { w: window.innerWidth, h: window.innerHeight };
    const gap = 8;

    let preferredDir = this.options.direction;

    // 1. Calculate Initial Position
    let pos = this.calculatePosition(
      preferredDir,
      triggerRect,
      tooltipRect,
      gap
    );

    // 2. Flip Logic
    const isOutOfBounds = (dir: string, x: number, y: number) => {
      if (dir === "top") return y < 0;
      if (dir === "bottom") return y + tooltipRect.height > viewport.h;
      if (dir === "left") return x < 0;
      if (dir === "right") return x + tooltipRect.width > viewport.w;
      return false;
    };

    if (isOutOfBounds(preferredDir, pos.x, pos.y)) {
      const opposites: Record<string, string> = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left",
      };
      const nextDir = opposites[preferredDir];
      const nextPos = this.calculatePosition(
        nextDir,
        triggerRect,
        tooltipRect,
        gap
      );

      if (!isOutOfBounds(nextDir, nextPos.x, nextPos.y)) {
        preferredDir = nextDir;
        pos = nextPos;
      }
    }

    // 3. Shift/Clamp Logic (Keep within viewport)
    pos.x = Math.max(
      gap,
      Math.min(pos.x, viewport.w - tooltipRect.width - gap)
    );
    pos.y = Math.max(
      gap,
      Math.min(pos.y, viewport.h - tooltipRect.height - gap)
    );

    this.tooltipElement.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
  }

  calculatePosition(dir: string, tr: DOMRect, tt: DOMRect, gap: number) {
    let x = 0,
      y = 0;

    switch (dir) {
      case "top":
        x = tr.left + tr.width / 2 - tt.width / 2;
        y = tr.top - tt.height - gap;
        break;
      case "bottom":
        x = tr.left + tr.width / 2 - tt.width / 2;
        y = tr.bottom + gap;
        break;
      case "left":
        x = tr.left - tt.width - gap;
        y = tr.top + tr.height / 2 - tt.height / 2;
        break;
      case "right":
        x = tr.right + gap;
        y = tr.top + tr.height / 2 - tt.height / 2;
        break;
    }
    return { x, y };
  }
}
