import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 9 locations', () => {
      expect(LOCATIONS).toHaveLength(9);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has latitude within Nottinghamshire service area bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.latitude).toBeGreaterThan(52.7);
        expect(loc.latitude).toBeLessThan(53.2);
      }
    });

    it('every location has longitude within Nottinghamshire service area bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.longitude).toBeGreaterThan(-1.6);
        expect(loc.longitude).toBeLessThan(-0.7);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "nottingham"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('nottingham');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 9 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(9);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('nottingham');
      expect(slugs).toContain('mansfield');
      expect(slugs).toContain('derby');
      expect(slugs).toContain('newark-on-trent');
      expect(slugs).toContain('loughborough');
      expect(slugs).toContain('arnold');
      expect(slugs).toContain('ilkeston');
      expect(slugs).toContain('long-eaton');
      expect(slugs).toContain('hucknall');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "nottingham"', () => {
      const loc = getLocationBySlug('nottingham');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Nottingham');
    });

    it('returns correct location for "hucknall"', () => {
      const loc = getLocationBySlug('hucknall');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Hucknall');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
